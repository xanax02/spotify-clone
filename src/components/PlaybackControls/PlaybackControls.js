import React from "react";
import { pausePlayback, playPlayback } from "../../utils/userDataFetch";

const PlaybackControls = ({
  is_paused,
  setPaused,
  deviceId,
  token,
  current_track,
}) => {
  const handlePlayPause = async () => {
    if (is_paused) {
      playPlayback(token, deviceId, current_track.uri);
      setPaused(false);
    } else {
      pausePlayback(token, deviceId);
      setPaused(true);
    }
  };

  return (
    <div>
      <button className="btn-spotify">&lt;&lt;</button>

      <button className="btn-spotify" onClick={handlePlayPause}>
        {is_paused ? "PLAY" : "PAUSE"}
      </button>

      <button className="btn-spotify">&gt;&gt;</button>
    </div>
  );
};

export default PlaybackControls;
