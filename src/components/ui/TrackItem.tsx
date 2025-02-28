import { TrackItemProps } from "../../types/typesAndInterfaces.ts";

export default function TrackItem({ album }: TrackItemProps) {
  return (
    <div className="flex flex-col items-start justify-start mr-4 cursor-pointer p-4 rounded-lg hover:bg-tinted-base transition-all duration-300 ease-in-out">
      <div className="w-50 relative">
        <img className="rounded-lg" src={album.images[0].url} alt={album.name} />
      </div>
      <h1 className="text-white py-3">{album.artists[0].name}</h1>
    </div>
  );
}