// RTK
import { useLazyHomePlaylistsQuery } from "../redux/rtk";

export const useHome = () => {
  const [
    homePlaylists,
    {
      data: homePlaylistsData,
      isLoading: homePlaylistsIsLoading,
      isFetching: homePlaylistsIsFetching,
    },
  ] = useLazyHomePlaylistsQuery();

  return {
    // Home Playlists
    homePlaylists,
    homePlaylistsData,
    homePlaylistsIsLoading,
    homePlaylistsIsFetching,
  };
};
