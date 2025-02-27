// Interfaces for Redux slices
export interface Song {
    id: number;
    name: string;
    artist: string;
    album: string;
    url: string;
    images: {
      url: string;
    };
  }
  
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
    images: Array<{ url: string }>;
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
  }
  
  // Interfaces for Redux state
  export interface SongState {
    songs: Song[];
    currentSong: Song;
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
  
  export interface TracksState {
    tracks: Track[];
    currentTrack: Track | null;
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
    playSong?: () => void;
  }
  
  export interface SidebarHeaderProps {
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
  }
  
  export interface PlaylistListProps {
    playlists: Playlist[];
    isCollapsed: boolean;
  }
  
  export interface SongItemProps {
    img: string;
    name: string;
    artist: string;
  }