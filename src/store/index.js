import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import tokenSlice from "./token-slice";
import playlistSlice from "./playlist-slice";
import trackSlice from "./track-slice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        token: tokenSlice,
        playlist: playlistSlice,
        currentSong: trackSlice
    }
})