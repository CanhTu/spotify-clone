import { IoMdClose } from "react-icons/io";
import InfoListItem from "../shared/InfoListItem.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.ts";
import { motion } from "framer-motion";
import { setIsPlaylistOpened, setCurrentTrack } from "../../store/slices/tracks.ts";
import Login from "../auth/Login.tsx";
import TrackDetails from "../ui/TrackDetails.tsx";
import { Track } from "../../types/typesAndInterfaces.ts";

export default function RightSideBar() {
  const dispatch = useDispatch<AppDispatch>();
  let sliderRef = useRef<Slider | null>(null);
  let token = useSelector((state: RootState) => state.token.token);
  const { tracks, currentTrack, isPlaylistOpened } = useSelector(
    (state: RootState) => state.tracks
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
    slidesToShow: tracks.length,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(tracks.indexOf(currentTrack) + 1);
    }
  }, [currentTrack]);
  return (
    <div id="rightSidebar" className={isPlaylistOpened ? "w-full relative overflow-y-hidden": "w-full relative overflow-y-scroll"}>
      <div className={isPlaylistOpened ? "hidden": "block"}>
        {token ? <TrackDetails/> : <Login />}
      </div>
      <motion.div
        initial={{ y: 0, display: "none" }}
        animate={{ y: isPlaylistOpened ? 0 : "100%", display: isPlaylistOpened ? "block" : "none" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-full z-10 bg-secondBlack"
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
                src={currentTrack.album.images[0].url}
                title={currentTrack.name}
                description={currentTrack.artists[0].name}
                isActive={true}
              />
            </div>
          </div>
          <div className="slider-container z-100 mt-3">
            <p className="font-bold text-white mb-2">Next Track</p>
            <Slider
              ref={(slider) => {
                if (slider) {
                  sliderRef.current = slider;
                }
              }}
              {...settings}
            >
              {tracks.map((track, index) => {
                let trackInfo: Track = track;
                if (currentTrack.name === track.name) {
                  trackInfo = currentTrack;
                }
                return (
                  <InfoListItem
                    key={index}
                    src={trackInfo.album.images[0].url}
                    title={trackInfo.name}
                    description={trackInfo.artists[0].name}
                    isActive={false}
                    playTrack={() => {
                      dispatch(setCurrentTrack(trackInfo));
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
