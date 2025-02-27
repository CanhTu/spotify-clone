export default function SongDetails(){
    return (
        <div className="p-5 bg-green-950 opacity-1/2">
            <div className="my-4">
                <h1 className="font-bold text-white">Dù Cho Tận Thế</h1>
                <p>Erik</p>
            </div>
            <div>
                <button className="w-full bg-secondBlack rounded-lg">
                <div className={`rounded-t-lg bg-center min-h-60 relative bg-[url("https://i.scdn.co/image/ab6761670000ecd443e5964feffc3b798aa9c65f")]`}>
                    <div className="absolute top-0 left-0 right-0 p-4">
                        <p className="text-left font-bold text-white">About the artist</p>
                    </div>
                </div>
                <div className="p-3 flex flex-col items-start justify-start">
                    <p>ERIK</p>
                    <div className="flex items-center justify-between w-full py-3">
                        <p className="text-sm">1,850,718 monthly listeners</p>
                        <button>Follow</button>
                    </div>
                    <p className="text-left">Anh thật sự ngu ngốc, bảo về người ấy cũng không xong...</p>
                </div>
                </button>
            </div>
        </div>
    )
}