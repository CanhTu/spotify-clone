import SongItem from "./SongItem.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

export default function SongGroup() {
  const songs = useSelector((state: RootState) => state.songs.songs);

  return (
    <div className="flex justify-between items-center py-4 w-full pl-5">
      <div className="w-full">
        <div className="flex items-center justify-between pb-4 px-4">
          <h1 className="text-white text-2xl font-bold">Made for you</h1>
          <a className="text-fifthText cursor-pointer hover:underline" href=""><p>Show all</p></a>
        </div>
        <div className="flex items-start justify-start w-full overflow-x-hidden">
          {/* Song item */}
          {songs.map((song, index) => (
            <SongItem key={index} img={song.images.url} name={song.name} artist={song.artist} />
          ))}
        </div>
      </div>
    </div>
  );
}