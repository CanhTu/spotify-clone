import Dashboard from "../ui/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setToken } from "../../store/slices/tokenSlice";
import { useEffect } from "react";
import { setPlaylists, setCurrentPlaylist } from "../../store/slices/playlists";
import { setTracks } from "../../store/slices/tracks";
import PlaylistDetails from "../ui/PlaylistDetails";

export default function MiddlePanel() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.token.token);
  const currentPlaylist = useSelector((state: RootState) => state.playlists.currentPlaylist);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.split("&")[0].split("=")[1];
      dispatch(setToken(token));
    }
  }, [dispatch]);

  useEffect(() => {
    const getPlaylistData = async (token: string) => {
      const result = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });
      const data = await result.json();
      if (data.items) {
        const playlists = data.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            images: item.images,
            tracks: item.tracks,
            uri: item.uri,
            snapshot_id: item.snapshot_id,
            href: item.href,
            external_urls: item.external_urls,
            type: item.type,
            owner: item.owner,
          };
        });
        dispatch(setPlaylists(playlists));
      }
    };

    const getFeaturedPlaylistData = async (token: string) => {
      const result = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await result.json();
      if (data.items) {
        const playlists = data.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            images: item.images,
            tracks: item.tracks,
            uri: item.uri,
            snapshot_id: item.snapshot_id,
            href: item.href,
            external_urls: item.external_urls,
            type: item.type,
            owner: item.owner,
            isPlaying: false,
          };
        });
        dispatch(setPlaylists(playlists));
      }
    };

    

    if (token) {
      getPlaylistData(token);
      getFeaturedPlaylistData(token);
    }
  }, [token, dispatch]);

  useEffect(() => {
    const getTracks = async (token: string, playlistId: string) => {
      const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await result.json();
      if (data.items) {
        const tracks = data.items.map((tracks: any) => {
          const item = tracks.track;
          return {
            id: item.id,
            name: item.name,
            uri: item.uri,
            snapshot_id: item.snapshot_id,
            href: item.href,
            external_urls: item.external_urls,
            type: item.type,
            album: item.album,
            artists: item.artists,
            track_number: item.track_number,
            disc_number: item.disc_number,
            duration_ms: item.duration_ms,
          };
        });
        dispatch(setTracks(tracks));
      }
    };
    if (token && currentPlaylist) {
      getTracks(token, currentPlaylist.id);
    }
  }, [token, currentPlaylist]);

  return (
    <>
      {currentPlaylist ? <PlaylistDetails /> : <Dashboard />}
    </>
  );
}
