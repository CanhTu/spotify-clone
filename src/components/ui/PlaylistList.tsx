import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../store/store"
import InfoListItem from "../shared/InfoListItem"
import { setCurrentPlaylist } from "../../store/slices/playlists"
import { PlaylistListProps } from "../../types/typesAndInterfaces";

export default function PlaylistList({ playlists, isCollapsed }: PlaylistListProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex items-center w-full justify-start flex-col p-4 overflow-y-scroll h-screen">
      {isCollapsed ? null : (
        <div className="flex items-center justify-between w-full py-2">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </a>
          <a className="cursor-pointer" href="">
            <button className=" rounded-full flex justify-between">
              Recents
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </a>
        </div>
      )}
      <div className="flex items-center justify-start w-full flex-col ">
        {playlists.map((playlist, index) =>
          isCollapsed ? (
            <div className="h-15 w-15 rounded-lg m-2">
              <img src={playlist.images[0].url} alt="avatar" className="rounded-lg" />

            </div>
          ) : (
            <InfoListItem
              key={index}
              src={playlist.images[0].url}
              title={playlist.name}
              description={playlist.owner ? playlist.owner.display_name : ""}
              isActive={false}
              playSong={() => {
                dispatch(setCurrentPlaylist(playlist));
              }}
            />
          )
        )}
      </div>
    </div>
  );
}