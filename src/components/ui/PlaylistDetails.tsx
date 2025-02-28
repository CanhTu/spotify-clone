import { useDispatch, useSelector } from "react-redux";
import { RiPlayFill } from "react-icons/ri";
import { RiPauseFill } from "react-icons/ri";
import ProfileImg from "../../assets/profile.png";
import { LuClock2 } from "react-icons/lu";
import { RootState, AppDispatch } from "../../store/store.ts";
import { setIsPlaying } from "../../store/slices/tracks.ts";


export default function PlaylistDetails() {
    const dispatch = useDispatch<AppDispatch>();
  
  const {tracks, isPlaying, currentTrack} = useSelector((state: RootState) => state.tracks);
  const currentPlaylist = useSelector((state: RootState) => state.playlists.currentPlaylist);

  const convertToMinSec = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlay = () => {
    dispatch(setIsPlaying(!isPlaying));
  }

  if (!currentPlaylist) {
    return <div className="text-white">Select a playlist to view details</div>;
  }
  return (
    <div className="w-full bg-secondBlack rounded-lg relative overflow-y-scroll">
      <div className="w-full  relative">
        {/* HEADER HERE */}
        <header className="w-full absolute h-20 text-white z-100 hidden">
          <div className="top-0 left-0 right-0 bottom-0 absolute bg-black opacity-1/2"></div>
          <div className="px-4 h-full text-white relative flex items-center justify-start bg-fourthBg w-full">
            <div className="flex items-center justify-start space-x-4 ">
              <div>
                <button className="text-black h-15 w-15 flex items-center justify-center bg-activeColor rounded-full outline-none hover:bg-hoverColor transition-all duration-300 ease-in-out" onClick={handlePlay}>
                  {isPlaying && currentPlaylist.name == "Top Songs 2025" ? <RiPauseFill size={36} /> : <RiPlayFill size={36} />}
                </button>
              </div>
              <p>{currentPlaylist.name}</p>
            </div>
          </div>
        </header>

        {/* PLAYLIST */}
        <div className="relative">
          <div className="flex w-full items-center justify-start bg-green-950 p-6">
            <div className="grid grid-cols-[30%_70%] gap-4 relative">
              <div>
                <img
                  src={currentPlaylist.images ? currentPlaylist.images[0].url : "https://misc.scdn.co/liked-tracks/liked-tracks-300.jpg"}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-end text-white">
                <p>Playlist</p>
                <h1 className="text-7xl py-3  font-bold">{currentPlaylist.name}</h1>
                <div className="flex">
                  <div className="w-5 mr-2">
                    <img src={ProfileImg} alt="" />
                  </div>
                  <div className="flex space-x-2 text-second">
                    <p>{currentPlaylist.owner.display_name}</p>
                    <p> * {new Date().getFullYear()} * </p>
                    <p>{currentPlaylist.tracks.total} tracks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* TABLE */}
        <div className="p-4 bg-black">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center justify-start space-x-4 ">
              <div>
                <button className="text-black h-15 w-15 flex items-center justify-center bg-activeColor rounded-full outline-none hover:bg-hoverColor transition-all duration-300 ease-in-out" onClick={handlePlay}>
                  {isPlaying && currentPlaylist.name == "Top Songs 2025" ? <RiPauseFill size={36} /> : <RiPlayFill size={36} />}
                </button>
              </div>
            </div>
            <div>
              <button className="text-black h-15 w-15 flex items-center justify-center bg-activeColor rounded-full outline-none hover:bg-hoverColor transition-all duration-300 ease-in-out">
                List
              </button>
            </div>
          </div>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>
                  <LuClock2 />
                </th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track, index) => {
                return (
                  <tr className={ currentTrack?.name === track.name ? "hover:bg-secondBlack cursor-pointer text-activeColor" : "hover:bg-secondBlack cursor-pointer"} key={index}>
                    <td>{index + 1}</td>
                    <td>{track.name}</td>
                    <td>{track.artists[0].name}</td>
                    <td>{convertToMinSec(track.duration_ms)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
