import { RiStackFill, RiStackLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import Tag from "./Tag";

interface SidebarHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export default function SidebarHeader({
  isCollapsed,
  setIsCollapsed,
}: SidebarHeaderProps) {
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className=" z-10 w-full">
      <div className="flex items-center w-full justify-between p-4">
        <div className="flex items-center justify-start w-full space-x-2 cursor-pointer hover:text-white">
          <button onClick={handleCollapse}>
            {isCollapsed ? (
              <RiStackFill size={28} />
            ) : (
              <RiStackLine size={28} />
            )}
          </button>

          {isCollapsed ? null : (
            <h1 className="font-bold text-md">Your Library</h1>
          )}
        </div>
        {isCollapsed ? null : (
          <div>
            <button className="cursor-pointer hover:text-white">
              <FiPlus size={28} />
            </button>
          </div>
        )}
      </div>
      {isCollapsed ? null : (
        <div className="w-full flex relative justify-between items-center overflow-x-hidden">
          <Tag name="Albums" />
          <Tag name="Albums" />
          <Tag name="Albums" />
          <Tag name="Albums" />
        </div>
      )}
    </div>
  );
}