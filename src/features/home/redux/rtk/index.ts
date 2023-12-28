// Service

import {
  type IAppResponse,
  type IAppParams,
} from "@/features/app/interfaces/api";
import serviceApi from "@/plugins/redux/service";

import {
  type IHomeCurrentPlayListsData,
  type IHomePlayListsData,
} from "../../interfaces";

export const homeApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    homeCurrentPlaylists: builder.query<
      IAppResponse<IHomeCurrentPlayListsData[]>,
      IAppParams
    >({
      query: ({ params }) => ({
        url: "/home/current-playlists",
        method: "GET",
        params,
      }),
    }),
    homePlaylists: builder.query<
      IAppResponse<IHomePlayListsData[]>,
      IAppParams
    >({
      query: ({ params }) => ({
        url: "/home/playlists",
        method: "GET",
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyHomeCurrentPlaylistsQuery, useLazyHomePlaylistsQuery } =
  homeApi;
