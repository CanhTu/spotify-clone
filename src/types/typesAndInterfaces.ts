// Interfaces for Redux slices
  export interface Playlist {
    id: string;
    name: string;
    images: Array<{ url: string }>;
    tracks: { total: number };
    uri: string;
    snapshot_id: string;
    href: string;
    external_urls: { spotify: string };
    type: string;
    owner: { display_name: string };
    isPlaying: boolean;
  }
  
  export interface Album {
    id: string;
    name: string;
    images: Array<{ url: string, width: number, height: number
     }>;
    tracks: { total: number };
    uri: string;
    snapshot_id: string;
    href: string;
    external_urls: { spotify: string };
    type: string;
    artists: Artist[];
    release_date: string;
    album_type: string;
    total_tracks: number;
  }
  
  export interface Artist {
    id: string;
    name: string;
    uri: string;
    href: string;
    external_urls: { spotify: string };
    type: string;
  }
  
  export interface Track {
    id: string;
    name: string;
    uri: string;
    snapshot_id: string;
    href: string;
    external_urls: { spotify: string };
    type: string;
    album: Album;
    artists: Artist[];
    track_number: number;
    disc_number: number;
    duration_ms: number;
    images: {
      url: string;
      width: number;
      height: number;
    }
  }
  
  // Interfaces for Redux state
  export interface TrackState {
    tracks: Track[];
    currentTrack: Track;
    isPlaying: boolean;
    isRepeating: boolean;
    isShuffling: boolean;
    isPlaylistOpened: boolean;
  }
  
  export interface TokenState {
    token: string | null;
  }
  
  export interface PlaylistsState {
    playlists: Playlist[];
    currentPlaylist: Playlist | null;
  }
  
  export interface AlbumsState {
    albums: Album[];
    currentAlbum: Album | null;
  }
  
  export interface TrackItemProps {
    id:any;
    album: Album;
  }

  // Interfaces for components
  export interface TagProps {
    name: string;
  }
  
  export interface InfoListItemProps {
    src: string;
    title: string;
    description: string;
    isActive: boolean;
    playTrack?: () => void;
  }
  
  export interface SidebarHeaderProps {
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
  }
  
  export interface PlaylistListProps {
    playlists: Playlist[];
    isCollapsed: boolean;
  }
  