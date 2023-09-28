// Service
import serviceApi from "@/plugins/redux/service";

// Interfaces
import { type IAppBody } from "@/features/app/interfaces";
import { type ILoginResponse, type ILoginBody } from "./interfaces";

export const authApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation<ILoginResponse, IAppBody<ILoginBody>>({
      query: ({ body }) => ({
        body,
        url: "/auth/login",
        method: "POST",
      }),
      transformResponse: ({ data }) => {
        const { accessToken, userData } = data;
        return {
          accessToken,
          userData,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useAuthLoginMutation } = authApi;
