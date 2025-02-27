import { SongItemProps } from "../../types/typesAndInterfaces.ts";

export default function SongItem({ img, name, artist }: SongItemProps) {
  return (
    <div className="flex flex-col items-start justify-start mr-4 cursor-pointer p-4 rounded-lg hover:bg-tinted-base transition-all duration-300 ease-in-out">
      <div className="w-50 relative">
        <img className="rounded-lg" src={img} alt={name} />
      </div>
      <h1 className="text-white py-3">{artist}</h1>
    </div>
  );
}