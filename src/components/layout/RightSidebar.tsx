import { IoMdClose } from "react-icons/io";
import InfoListItem from "../shared/InfoListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { setCurrentSong } from "../../store/slices/songSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { motion } from "framer-motion";
import { setIsPlaylistOpened } from "../../store/slices/songSlice";
import Login from "../auth/Login";
import SongDetails from "../ui/SongDetails";

interface Track {
  id: number;
  name: string;
  artist: string;
  album: string;
  url: string;
  images: {
    url: string;
  };
}

export default function RightSideBar() {
  const dispatch = useDispatch<AppDispatch>();
  let sliderRef = useRef<Slider | null>(null);
  let token = useSelector((state: RootState) => state.token.token);
  const { songs, currentSong, isPlaylistOpened } = useSelector(
    (state: RootState) => state.songs
  );
  interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    vertical: boolean;
    verticalSwiping: boolean;
    arrows: boolean;
  }

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: songs.length,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(songs.indexOf(currentSong) + 1);
    }
  }, [currentSong]);
  return (
    <div className="relative">
      <div className={isPlaylistOpened ? "hidden" : "block"}>
        {token ? <SongDetails/> : <Login />}
      </div>
      <motion.div
        initial={{ y: 0, display: "none" }}
        animate={{ y: isPlaylistOpened ? 0 : "100%", display: "block" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-0 h-full w-full"
      >
        <div className="flex justify-between items-center cursor-pointer px-6 py-4 mt-0 bg-tinted-base w-full z-10">
          <h1 className="font-bold text-white">Queue</h1>
          <div
            className="flex justify-end items-center w-full space-x-2 "
            onClick={() => dispatch(setIsPlaylistOpened(!isPlaylistOpened))}
          >
            <IoMdClose className="hover:bg-tinted-base" />
          </div>
        </div>
        <div className="mt-5 px-4">
          <div>
            <div>
              <p className="font-bold text-white">Now playing</p>
              <InfoListItem
                src={currentSong.images.url}
                title={currentSong.name}
                description={currentSong.artist}
                isActive={true}
              />
            </div>
          </div>
          <div className="slider-container z-100 mt-3">
            <p className="font-bold text-white mb-2">Next Song</p>
            <Slider
              ref={(slider) => {
                if (slider) {
                  sliderRef.current = slider;
                }
              }}
              {...settings}
            >
              {songs.map((song, index) => {
                let songInfo: Track = song;
                if (currentSong.name === song.name) {
                  songInfo = currentSong;
                }
                return (
                  <InfoListItem
                    key={index}
                    src={songInfo.images.url}
                    title={songInfo.name}
                    description={songInfo.artist}
                    isActive={false}
                    playSong={() => {
                      dispatch(setCurrentSong(songInfo));
                    }}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
