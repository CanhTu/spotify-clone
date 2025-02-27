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
      <div id="wapper" className="max-h-screen max-w-screen w-screen overflow-hidden bg-firstBlack text-fifthText">
        <Header />
        <div className={isCollapsed ? "grid grid-cols-[4%_75%_19%] gap-4 relative" : "grid grid-cols-[19%_60%_19%] gap-4 relative "}>
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
