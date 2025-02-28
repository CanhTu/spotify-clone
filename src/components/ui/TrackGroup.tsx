import TrackItem from "./TrackItem.tsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store.ts";
import { setAlbums } from "../../store/slices/albums.ts";
import { Album } from "../../types/typesAndInterfaces.ts";

export default function TrackGroup() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.token.token);
  const albums = useSelector((state: RootState) => state.albums.albums);

  useEffect(() => {
    const getNewReleasesAlbum = async (token: string) => {
      const result = await fetch(
        `https://api.spotify.com/v1/browse/new-releases`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await result.json();

      if (data.albums && data.albums.items) {
        const albums = data.albums.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            uri: item.uri,
            snapshot_id: item.snapshot_id,
            href: item.href,
            external_urls: item.external_urls,
            type: item.type,
            images: item.images,
            album_type: item.album_type,
            artists: item.artists,
            total_tracks: item.total_tracks,
            release_date: item.release_date,
            tracks: item.tracks,
          };
        });
        dispatch(setAlbums(albums));
      }
    };

    if (token) {
      getNewReleasesAlbum(token);
    }
  }, [token, dispatch]);
  return (
    <div className="flex justify-between items-center py-4 w-full pl-5">
      <div className="w-full">
        <div className="flex items-center justify-between pb-4 px-4">
          <h1 className="text-white text-2xl font-bold">New Release</h1>
          <a className="text-fifthText cursor-pointer hover:underline" href="">
            <p>Show all</p>
          </a>
        </div>
        <div className="flex items-start justify-start w-full overflow-x-hidden">
          {albums && albums.length > 0
            ? albums.map((album: Album, index: any) => {
                return <TrackItem id={index} album={album} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
