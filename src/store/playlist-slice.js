import { createSlice } from "@reduxjs/toolkit";;

const initialState = {
    playlist: null
}

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setPlaylist(state, action) {
            state.playlist = action.payload;
        }
    }
})

export const playlistActions = playlistSlice.actions;
export default playlistSlice;
