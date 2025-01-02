import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSong: null
}

const trackSlice = createSlice({
    name: 'currentSong',
    initialState,
    reducers: {
        setCurrentSong(state, action) {
            state.currentSong = action.payload
        }
    }
})

export default trackSlice;
export const trackSliceActions = trackSlice.actions;