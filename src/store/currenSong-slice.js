import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
};

const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
  },
});

export default currentSongSlice;
export const currentSongActions = currentSongSlice.actions;
