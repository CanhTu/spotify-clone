import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Album, AlbumsState } from "../../types/typesAndInterfaces.ts";

const initialState: AlbumsState = {
  albums: [],
  currentAlbum: null,
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    setAlbums(state, action: PayloadAction<Album[]>) {
      state.albums = action.payload;
    },
    setCurrentAlbum(state, action: PayloadAction<Album>) {
      state.currentAlbum = action.payload;
    },
    addAlbum(state, action: PayloadAction<Album>) {
      state.albums.push(action.payload);
    },
    removeAlbum(state, action: PayloadAction<string>) {
      state.albums = state.albums.filter(
        (album) => album.id !== action.payload
      );
    },
  },
});

export const {
  setAlbums,
  setCurrentAlbum,
  addAlbum,
  removeAlbum,
} = albumsSlice.actions;

export default albumsSlice.reducer;