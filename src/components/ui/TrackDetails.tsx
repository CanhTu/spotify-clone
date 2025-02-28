export default function TrackDetails() {
  return (
    <div id="trackDetails" className="h-full p-5 bg-green-950 opacity-1/2 ">
      <div className="my-4 pl-3">
        <h1 className="font-bold text-white text-2xl">Dù Cho Tận Thế</h1>
        <p>Erik</p>
      </div>
      <div className="mb-3">
        <div className="w-full bg-secondBlack rounded-lg">
          <div
            className={`rounded-t-lg bg-center min-h-60 relative bg-[url("https://i.scdn.co/image/ab6761670000ecd443e5964feffc3b798aa9c65f")]`}
          >
            <div className="absolute top-0 left-0 right-0 p-4">
              <p className="text-left font-bold text-white">About the artist</p>
            </div>
          </div>
          <div className="p-3 flex flex-col items-start justify-start">
            <p className="font-bold text-white">ERIK</p>
            <div className="flex items-center justify-between w-full py-3">
              <p className="text-sm">1,850,718 monthly listeners</p>
              <button className="font-bold text-white">Follow</button>
            </div>
            <p className="text-left">
              Anh thật sự ngu ngốc, bảo về người ấy cũng không xong...
            </p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full bg-secondBlack rounded-lg">
          <div className="p-3 flex flex-col items-start justify-start">
            <div className="flex items-center justify-between w-full py-3">
              <p className="font-bold text-white">Credits</p>
              <button>Show all</button>
            </div>
            <div className="flex items-center justify-between w-full py-3">
              <div className="text-left">
                <h1 className="font-bold ">ERIK</h1>
                <p className="text-sm">Main Artist</p>
              </div>
              <button className="font-bold text-white">Follow</button>
            </div>
            <div className="text-left">
              <h1 className="font-bold ">Nguyễn Phúc Thiện</h1>
              <p className="text-sm">Composer, Lyricist</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="w-full bg-secondBlack rounded-lg">
          <div className="p-3 flex flex-col items-start justify-start">
            <div className="flex items-center justify-between w-full py-3">
              <p className="font-bold text-white">Next in queue</p>
              <button>Open queue</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="w-full bg-secondBlack rounded-lg">
          <div className="p-3 flex flex-col items-start justify-start">
            <div className="flex items-center justify-between w-full py-3">
              <p className="font-bold text-white">Next in queue</p>
              <button>Open queue</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="w-full bg-secondBlack rounded-lg">
          <div className="p-3 flex flex-col items-start justify-start">
            <div className="flex items-center justify-between w-full py-3">
              <p className="font-bold text-white">Next in queue</p>
              <button>Open queue</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="w-full bg-secondBlack rounded-lg">
          <div className="p-3 flex flex-col items-start justify-start">
            <div className="flex items-center justify-between w-full py-3">
              <p className="font-bold text-white">Next in queue</p>
              <button>Open queue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
