import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track, TrackState } from "../../types/typesAndInterfaces.ts";
import trackData from "../../data/data.ts";

const initialState: TrackState = {
  tracks: trackData,
  currentTrack: trackData[0],
  isPlaying: false,
  isRepeating: false,
  isShuffling: false,
  isPlaylistOpened: false,
};

const tracks = createSlice({
  name: "track",
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
    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
    },
    setIsRepeating(state, action: PayloadAction<boolean>) {
      state.isRepeating = action.payload;
    },
    setIsShuffling(state, action: PayloadAction<boolean>) {
      state.isShuffling = action.payload;
    },
    setIsPlaylistOpened(state, action: PayloadAction<boolean>) {
      state.isPlaylistOpened = action.payload;
    },
    shuffleTracks(state) {
      state.tracks = [...state.tracks].sort(() => Math.random() - 0.5);
    },
    resetTracks(state) {
      state.tracks = trackData;
    },
  },
});

export const {
  setTracks,
  setCurrentTrack,
  addTrack,
  removeTrack,
  setIsPlaying,
  setIsRepeating,
  setIsShuffling,
  setIsPlaylistOpened,
  shuffleTracks,
  resetTracks,
} = tracks.actions;

export default tracks.reducer;
