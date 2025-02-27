import SidebarHeader from "../ui/SidebarHeader.tsx";
import PlaylistList from "../ui/PlaylistList.tsx";
import { Sidebar } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

interface LeftSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export default function LeftSidebar({
  isCollapsed,
  setIsCollapsed,
}: LeftSidebarProps) {
  const playlists = useSelector((state: RootState) => state.playlists.playlists);

  return (
    <Sidebar
      collapsed={isCollapsed}
      backgroundColor="secondBlack"
      width="inherit"
      rootStyles={{ border: "none", zIndex: 0, left: "10px" }}
      transitionDuration={1000}
      className="bg-secondBlack rounded-lg mr-2"
    >
      <SidebarHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <PlaylistList playlists={playlists} isCollapsed={isCollapsed} />
    </Sidebar>
  );
}