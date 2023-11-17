/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fetchBaseQuery,
  // type BaseQueryApi,
  createApi,
} from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseUrl = process.env.NEXT_PUBLIC_MOCK_APIARY_API;

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
  baseQuery: fetchBaseQuery({
    prepareHeaders,
    baseUrl,
  }),
  endpoints: () => ({}),
  reducerPath: "api",
});

export default serviceApi;
