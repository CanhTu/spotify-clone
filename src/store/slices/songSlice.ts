import songData from "../../data/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song, SongState } from "../../types/typesAndInterfaces";

const initialState: SongState = {
  songs: songData,
  currentSong: songData[0],
  isPlaying: false,
  isRepeating: false,
  isShuffling: false,
  isPlaylistOpened: false,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSong(state, action: PayloadAction<Song>) {
      state.currentSong = action.payload;
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
    shuffleSongs(state) {
      state.songs = [...state.songs].sort(() => Math.random() - 0.5);
    },
    resetSongs(state) {
      state.songs = songData;
    },
  },
});

export const {
  setCurrentSong,
  setIsPlaying,
  setIsRepeating,
  setIsShuffling,
  setIsPlaylistOpened,
  shuffleSongs,
  resetSongs,
} = songSlice.actions;

export default songSlice.reducer;