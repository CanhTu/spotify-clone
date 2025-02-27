import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Playlist, PlaylistsState } from "../../types/typesAndInterfaces.ts";

const initialState: PlaylistsState = {
  playlists: [],
  currentPlaylist: null,
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylists(state, action: PayloadAction<Playlist[]>) {
      state.playlists = action.payload;
    },
    setCurrentPlaylist(state, action: PayloadAction<Playlist>) {
      state.currentPlaylist = action.payload;
    },
    addPlaylist(state, action: PayloadAction<Playlist>) {
      state.playlists.push(action.payload);
    },
    removePlaylist(state, action: PayloadAction<string>) {
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id !== action.payload
      );
    },
  },
});

export const {
  setPlaylists,
  setCurrentPlaylist,
  addPlaylist,
  removePlaylist,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;