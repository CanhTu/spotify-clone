import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../store/slices/songSlice.ts'
import tokenReducer from '../store/slices/tokenSlice.ts'
import playlistsReducer from '../store/slices/playlists.ts'
import tracksReducer from '../store/slices/tracks.ts'

const store = configureStore({
  reducer: {
    songs: songReducer,
    token: tokenReducer,
    playlists: playlistsReducer,
    tracks: tracksReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;