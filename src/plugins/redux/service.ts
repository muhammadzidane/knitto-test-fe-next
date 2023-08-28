/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  // type BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// const baseUrl = process.env.BASE_URL;
const baseUrl = "https://77f4c4e5-4e66-4e24-83da-afd0f79e584a.mock.pstmn.io";
const prepareHeaders = (
  headers: Headers,
  // api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
  api: any
) => {
  const token = api.getState().auth.auth.accessToken;

  // If we have a token set in state, let's assume that we should be passing it.
  if (token !== undefined) {
    headers.set("authorization", `Bearer ${token}`);
  }

  return headers;
};

export const serviceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders,
  }),
  endpoints: () => ({}),
});

export default serviceApi;
