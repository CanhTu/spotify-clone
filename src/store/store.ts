import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../store/slices/tokenSlice.ts'
import playlistsReducer from '../store/slices/playlists.ts'
import tracksReducer from '../store/slices/tracks.ts'
import albumsReducer from '../store/slices/albums.ts'


const store = configureStore({
  reducer: {
    token: tokenReducer,
    playlists: playlistsReducer,
    tracks: tracksReducer,
    albums: albumsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;