// Service
// Interfaces
import { type IAppBody } from "@/features/app/interfaces";
import serviceApi from "@/plugins/redux/service";

import { type ILoginResponse, type ILoginBody } from "./interfaces";

export const authApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation<ILoginResponse, IAppBody<ILoginBody>>({
      transformResponse: ({ data }) => {
        const { accessToken, userData } = data;
        return {
          accessToken,
          userData,
        };
      },
      query: ({ body }) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useAuthLoginMutation } = authApi;
