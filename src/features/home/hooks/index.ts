// RTK
import { useLazyHomePlaylistsQuery } from "../redux/rtk";

export const useHome = () => {
  const [
    homePlaylists,
    {
      isFetching: homePlaylistsIsFetching,
      isLoading: homePlaylistsIsLoading,
      data: homePlaylistsData,
    },
  ] = useLazyHomePlaylistsQuery();

  return {
    homePlaylistsIsFetching,
    homePlaylistsIsLoading,
    homePlaylistsData,
    // Home Playlists
    homePlaylists,
  };
};
