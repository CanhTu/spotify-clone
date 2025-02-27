import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track, TracksState } from "../../types/typesAndInterfaces.ts";

const initialState: TracksState = {
  tracks: [],
  currentTrack: null,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTracks(state, action: PayloadAction<Track[]>) {
      state.tracks = action.payload;
    },
    setCurrentTrack(state, action: PayloadAction<Track>) {
      state.currentTrack = action.payload;
    },
    addTrack(state, action: PayloadAction<Track>) {
      state.tracks.push(action.payload);
    },
    removeTrack(state, action: PayloadAction<string>) {
      state.tracks = state.tracks.filter(
        (track) => track.id !== action.payload
      );
    },
  },
});

export const {
  setTracks,
  setCurrentTrack,
  addTrack,
  removeTrack,
} = tracksSlice.actions;

export default tracksSlice.reducer;