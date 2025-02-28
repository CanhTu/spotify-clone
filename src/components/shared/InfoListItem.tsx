import { InfoListItemProps } from "../../types/typesAndInterfaces.ts";


export default function InfoListItem({
  src,
  title,
  description,
  isActive,
  playTrack,
}: InfoListItemProps){
  return (
    <div className="flex items-center justify-start w-full space-x-4 px-2 py-2 cursor-pointer hover:bg-tinted-base transition-all duration-300 ease-in-out rounded-sm">
      <div className="min-w-15 h-15 w-15 rounded-lg cursor-pointer" onClick={playTrack}>
        <img src={src} alt="avatar" className="rounded-lg" />
      </div>
      <div className="overflow-x-hidden">
        <h1
          className={
            isActive ? "text-activeColor text-base" : "text-white text-base"
          }
        >
          {title}
        </h1>
        <p>{description}</p>
      </div>
      {/* <BsThreeDots /> */}
    </div>
  );
};