import React from "react";
import CurrentSong from "./CurrentSong";
import TrackControls from "./TrackControls";
import DeviceControl from "./DeviceControl";
import WebPlayback from "../WebPlayback/WebPlayback";
import { useSelector } from "react-redux";

const Player = () => {
  const token = useSelector((state) => state.token.token);

  return (
    <div className="flex items-center justify-between px-4 bg-black w-[100vw] h-[90px] mt-[-8px]">
      {/* <CurrentSong />
      <TrackControls />
      <DeviceControl /> */}
      <WebPlayback token={token} />
    </div>
  );
};

export default Player;
