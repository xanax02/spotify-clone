import React, { useState, useEffect } from "react";
import {
  getRecentlyPlayed,
  pausePlayback,
  playPlayback,
} from "../../utils/userDataFetch";
import PlaybackControls from "../PlaybackControls/PlaybackControls";

const WebPlayback = (props) => {
  const defaultTrack = {
    name: "",
    album: {
      images: [{ url: "" }],
    },
    artists: [{ name: "" }],
  };

  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(true);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(defaultTrack);
  const [deviceId, setDevideId] = useState(null);

  useEffect(() => {
    getRecentlyPlayed(props.token).then((items) => {
      setTrack(items?.items[0]?.track);
    });
  }, [props.token]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const spotifyPlayer = new window.Spotify.Player({
        name: "Custom Player",
        getOAuthToken: (cb) => {
          cb(props.token[0][1]);
        },
        volume: 1,
      });

      console.log("player", spotifyPlayer);
      setPlayer(spotifyPlayer);

      spotifyPlayer.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDevideId(device_id);
      });

      spotifyPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      //   spotifyPlayer.addListener("player_state_changed", (state) => {
      //     console.log("state changed");
      //     if (!state) {
      //       return;
      //     }
      //     setTrack(state.track_window.current_track);
      //     setPaused(state.paused);

      //     spotifyPlayer.getCurrentState().then((state) => {
      //       !state ? setActive(false) : setActive(true);
      //     });
      //   });

      spotifyPlayer.addListener("autoplay_failed", () => {
        console.log("Autoplay is not allowed by the browser autoplay rules");
      });

      spotifyPlayer.addListener("initialization_error", ({ message }) => {
        console.error("Initialization Error:", message);
      });

      spotifyPlayer.addListener("authentication_error", ({ message }) => {
        console.error("Authentication Error:", message);
      });

      spotifyPlayer.addListener("account_error", ({ message }) => {
        console.error("Account Error:", message);
      });

      spotifyPlayer.addListener("playback_error", ({ message }) => {
        console.error("Playback Error:", message);
      });

      spotifyPlayer.activateElement();

      spotifyPlayer.connect();
    };

    return () => {
      if (player) {
        player.disconnect();
      }
    };
  }, [props.token]);

  return (
    <div className="container w-full">
      <div className="flex w-full gap-96">
        <div className="flex items-center gap-2 justify-center">
          <img
            src={current_track.album.images[0]?.url || ""}
            className="h-28 w-28"
            alt="Album cover"
          />

          <div className="now-playing__side">
            <div className="now-playing__name">
              {current_track.name || "No track playing"}
            </div>

            <div className="now-playing__artist">
              {current_track.artists[0]?.name || "Unknown Artist"}
            </div>
          </div>
        </div>
        <div className="flex w-full mt-10">
          {player && (
            <PlaybackControls
              is_paused={is_paused}
              setPaused={setPaused}
              deviceId={deviceId}
              token={props.token}
              current_track={current_track}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WebPlayback;
