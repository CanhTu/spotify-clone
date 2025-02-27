import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { RiDoorOpenFill } from "react-icons/ri";

export default function SearchBar() {
  return (
    <div className="flex items-center space-x-2">
      <div className="border-none bg-tinted-base p-3 rounded-full text-white">
        <a href="">
          <GoHomeFill size={24} />
        </a>
      </div>
      <div className="flex items-center space-x-4 bg-secondBlack outline-none px-3 py-2 rounded-full hover:outline-solid">
        <a href="">
          <CiSearch className="hover:text-white cursor-pointer" size={24} />
        </a>
        <input
          className="bg-secondBlack text-white outline-none border-none"
          type="text"
          placeholder="What do you want to play?"
        />
        |
        <a href="">
          <RiDoorOpenFill
            className="pl-2 hover:text-white cursor-pointer"
            size={30}
          />
        </a>
      </div>
    </div>
  );
}