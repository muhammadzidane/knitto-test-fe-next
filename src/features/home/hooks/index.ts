// RTK
import {
  useLazyHomeCurrentPlaylistsQuery,
  useLazyHomePlaylistsQuery,
} from "../redux/rtk";

export const useHome = () => {
  // Playlist
  const [
    homePlaylists,
    {
      isFetching: homePlaylistsIsFetching,
      isLoading: homePlaylistsIsLoading,
      data: homePlaylistsData,
    },
  ] = useLazyHomePlaylistsQuery();

  // Current Playlist
  const [
    homeCurrentPlaylists,
    {
      isFetching: homeCurrentPlaylistsIsFetching,
      isLoading: homeCurrentPlaylistsIsLoading,
      data: homeCurrentPlaylistsData,
    },
  ] = useLazyHomeCurrentPlaylistsQuery();

  return {
    homeCurrentPlaylistsIsFetching,
    homeCurrentPlaylistsIsLoading,
    homeCurrentPlaylistsData,
    homePlaylistsIsFetching,
    homePlaylistsIsLoading,
    homeCurrentPlaylists,
    homePlaylistsData,
    homePlaylists,
  };
};
