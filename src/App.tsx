import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/layout/Header.tsx";
import MiddlePanel from "./components/layout/MiddlePanel.tsx";
import RightSideBar from "./components/layout/RightSidebar.tsx";
import MusicPlayer from "./components/layout/MusicPlayer.tsx";
import LeftSidebar from "./components/layout/LeftSidebar.tsx";
import {  useState } from "react";

import { Provider } from "react-redux";
import store from "./store/store.ts";


function App() {

  let [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Provider store={store}>
      <div id="wapper" className="max-h-screen h-screen bg-firstBlack text-fifthText grid grid-rows-[10%_auto_13%]">
        <Header />
        <div id="main" className={isCollapsed ? "grid grid-cols-[auto_auto_24%] gap-4 " : "grid grid-cols-[24%_auto_24%] gap-4 "}>
          <LeftSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <MiddlePanel />
          <RightSideBar />
        </div>
        <MusicPlayer />
      </div>
    </Provider>
  );
}

export default App;
