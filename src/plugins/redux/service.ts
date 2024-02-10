import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseUrl = process.env.NEXT_PUBLIC_MOCK_API;

const prepareHeaders = (headers: Headers) => {
  //
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
