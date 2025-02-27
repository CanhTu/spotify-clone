import Tag from "./Tag.tsx";
import SongGroup from "./SongGroup.tsx";


export default function Dashboard() {

  return (
    <div className="max-h-screen pb-4 bg-secondBlack rounded-xl relative w-full">
    {/* Head bar */}
    <div
      id="overlayHeader"
      className="flex justify-start items-center px-6 py-2 mt-0 z-10 bg-overlay"
    >
      <Tag name="Albums" />
      <Tag name="Music" />
      <Tag name="Podcasts" />
    </div>

    <div className="relative overflow-y-auto h-screen">
      {/* Suggest for you */}
      <div className="flex justify-between items-center py-4 mt-16 w-full pl-9 ">
        <div className="grid grid-cols-2 w-full gap-4">
          <div className="flex items-center justify-start bg-tinted-base cursor-pointer rounded-sm">
            <div className="w-15 rounded-lg flex items-center  justify-center relative ">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273a8be4928d42db427416c94d6"
                alt="avatar"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-white p-4">CAM'ON</h1>
              </div>
              <div className="px-4">
                <button>Play</button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start  bg-tinted-base cursor-pointer rounded-sm">
            <div className="w-15 rounded-lg flex items-center justify-center relative cursor-pointer">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273a8be4928d42db427416c94d6"
                alt="avatar"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-white p-4">CAM'ON</h1>
              </div>
              <div className="px-4">
                <button>Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Song group */}
      <SongGroup />
      <SongGroup />
      <SongGroup />
      <SongGroup />
      <SongGroup />
      <SongGroup />
      <SongGroup />
    </div>
  </div>
  );
}
