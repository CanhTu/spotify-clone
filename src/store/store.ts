import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../store/slices/songSlice'
import tokenReducer from '../store/slices/tokenSlice'
import playlistsReducer from '../store/slices/playlists'
import tracksReducer from '../store/slices/tracks'

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