import { TagProps } from "../../types/typesAndInterfaces.ts";

export default function Tag({ name }: TagProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 bg-tinted-base rounded-full mx-2 my-3 cursor-pointer hover:bg-overlay transition-all duration-300 ease-in-out">
      <p className="mx-1 font-medium text-thirdWhite text-sm">{name}</p>
    </div>
  );
}