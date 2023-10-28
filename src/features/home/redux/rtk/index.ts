// Service
import serviceApi from "@/plugins/redux/service";

// Interfaces
import {
  type IAppResponse,
  type IAppParams,
} from "@/features/app/interfaces/api";
import { type IHomePlayListsData } from "../../interfaces";

export const homeApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    homePlaylists: builder.query<
      IAppResponse<IHomePlayListsData[]>,
      IAppParams
    >({
      query: ({ params }) => ({
        params,
        url: "/home/playlists",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyHomePlaylistsQuery } = homeApi;
