import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";
import { LuRepeat2, LuMicVocal } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import { VscVmConnect } from "react-icons/vsc";
import { CgMiniPlayer } from "react-icons/cg";
import { SlVolume1, SlVolume2, SlVolumeOff } from "react-icons/sl";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { RootState, AppDispatch } from "../../store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTrack,
  setIsPlaying,
  setIsRepeating,
  setIsShuffling,
  setIsPlaylistOpened,
  shuffleTracks,
  resetTracks,
} from "../../store/slices/tracks";

export default function MusicPlayer() {
  let audioRef = useRef<HTMLAudioElement | null>(null);
  let progressBar = useRef<HTMLInputElement | null>(null);
  let [duration, setDuration] = useState(0);
  let [currentTime, setCurrentTime] = useState(0);
  let [progress, setProgress] = useState(0);
  let [isDragging, setIsDragging] = useState(false);
  let [volume, setVolume] = useState(100);
  let [isMuted, setIsMuted] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { tracks, currentTrack, isPlaying, isRepeating, isShuffling, isPlaylistOpened } = useSelector(
    (state: RootState) => state.tracks
  );
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      const handleTimeUpdate = () => {
        const currentTimeRef = audio.currentTime;
        setCurrentTime(currentTimeRef);
        if (duration !== 0 && parseFloat(currentTimeRef.toFixed(0)) === parseFloat(duration.toFixed(0))) {
          if (!isRepeating) {
            handleNext();
          }
          setCurrentTime(0);
          setProgress(0);
        }
        let progressValue = (currentTimeRef / duration) * 100;
        setProgress(progressValue ? parseFloat(progressValue.toFixed(0)) : 0);
      };

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      if (!isDragging) {
        audio.addEventListener("timeupdate", handleTimeUpdate);
      }

      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [duration, isDragging]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.load();
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentTrack]);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio?.paused) {
      audio.play();
      dispatch(setIsPlaying(true));
    } else {
      audio?.pause();
      dispatch(setIsPlaying(false));
    }
  };

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let progressValue = e.target.value;
    let newCurrentTime = (duration / 100) * (progressValue ? parseFloat(progressValue) : 0);
    setCurrentTime(newCurrentTime);
    setProgress(progressValue ? parseFloat(progressValue) : 0);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (isDragging) {
      let progressValue = e.currentTarget.value;
      let newCurrentTime = (duration / 100) * (progressValue ? parseFloat(progressValue) : 0);
      setCurrentTime(newCurrentTime);
      setProgress(progressValue ? parseFloat(progressValue) : 0);
    }
  };

  interface HandleVolumeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleVolume = (event: HandleVolumeEvent) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleToggleVolume = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleToggleRepeat = () => {
    dispatch(setIsRepeating(!isRepeating));
    if (audioRef.current) {
      audioRef.current.loop = !isRepeating;
    }
  };

  const handleToggleShuffle = () => {
    dispatch(setIsShuffling(!isShuffling));
    if (isShuffling) {
      dispatch(shuffleTracks());
    } else {
      dispatch(resetTracks());
    }
  };

  const handleNext = () => {
    let currentIndex = tracks.findIndex((track) => track === currentTrack);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= tracks.length) {
      nextIndex = 0;
    }
    dispatch(setCurrentTrack(tracks[nextIndex]));
    if (isPlaying) {
      audioRef.current?.addEventListener('loadeddata', () => {
        audioRef.current?.play();
      }, { once: true });
    }
  };

  const handlePrev = () => {
    let currentIndex = tracks.findIndex((track: typeof currentTrack) => track === currentTrack);
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = tracks.length - 1;
    }
    dispatch(setCurrentTrack(tracks[prevIndex]));
    if (isPlaying) {
      audioRef.current?.addEventListener('loadeddata', () => {
        audioRef.current?.play();
      }, { once: true });
    }
  };

  interface ConvertToMinSec {
    (seconds: number): string;
  }

  const convertToMinSec: ConvertToMinSec = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toFixed(0)
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-secondBlack w-full grid grid-cols-3 gap-4 px-6 relative">
      <div className="flex items-center space-x-4">
        <img
          src={currentTrack.album.images[0].url}
          alt={currentTrack.name}
          className="w-18 h-18 rounded-lg"
        />
        <div className="flex flex-col">
          <h3 className="text-white max-w-100 overflow-x-hidden">{currentTrack.name}</h3>
          <p className="text-thirdText">{currentTrack.artists[0].name}</p>
        </div>
      </div>

      {/* Player here */}
      <div className="flex items-center justify-center flex-col ">
        <div className="flex items-center justify-center space-x-6 my-3 text-xl">

          {/* Shuffle */}
          <button
            onClick={handleToggleShuffle}
            className="cursor-pointer hover:text-white transition "
          >
            <FaShuffle
              size={20}
              className={isShuffling ? "text-activeColor" : ""}
            />
          </button>

          {/* Previous */}
          <button
            onClick={handlePrev}
            className="cursor-pointer hover:text-white transition "
          >
            <RxTrackPrevious size={20} />
          </button>

          {/* Play */}
          <button
            onClick={handlePlay}
            className="cursor-pointer hover:text-white transition "
          >
            {isPlaying ? <FaPauseCircle size={36} /> : <FaPlayCircle size={36} />}
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="cursor-pointer hover:text-white transition "
          >
            <RxTrackNext size={20} />
          </button>

          {/* Repeat */}
          <button
            onClick={handleToggleRepeat}
            className="cursor-pointer hover:text-white transition"
          >
            <LuRepeat2 size={26} className={isRepeating ? "text-activeColor" : ""} />
          </button>
        </div>

        <div className="flex items-center space-x-4 w-full">
          <audio ref={audioRef} className="hidden" id="audio" controls>
            <source src={currentTrack.uri} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="w-full flex item-center justify-center text-xs">
            <p className="px-2">
              {currentTime ? convertToMinSec(currentTime) : "00:00"}
            </p>
            <input
              ref={progressBar}
              onChange={handleProgressBarChange}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="w-2/3 outline-none border-none "
              type="range"
              id="player"
              value={typeof progress === "number" ? progress : 0}
              name="player"
            />
            <p className="px-2">
              {duration ? convertToMinSec(duration) : "00:00"}
            </p>
          </div>
        </div>
      </div>

      {/* Other features */}
      <div className="flex items-center justify-end">
        <div className="flex items-center justify-end space-x-4">
          <LuMicVocal />
          <button className="cursor-pointer hover:text-white transition" onClick={()=>dispatch(setIsPlaylistOpened(!isPlaylistOpened))}><HiOutlineQueueList className={ isPlaylistOpened ? "text-activeColor" : ""} /></button>
          <VscVmConnect />
          <button className="cursor-pointer hover:text-white transition" onClick={handleToggleVolume}>
            {volume > 0 && !isMuted ? (
              volume < 50 ? (
                <SlVolume1 />
              ) : (
                <SlVolume2 />
              )
            ) : (
              <SlVolumeOff />
            )}
          </button>
          <input
            type="range"
            id="volume"
            className="cursor-pointer hover:text-white transition"
            onChange={handleVolume}
            value={volume}
          ></input>
          <button className="cursor-pointer hover:text-white transition"><CgMiniPlayer /></button>
          <button className="cursor-pointer hover:text-white transition"><RiExpandDiagonalLine /></button>
        </div>
      </div>
    </div>
  );
}

