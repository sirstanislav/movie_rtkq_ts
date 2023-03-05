import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const twitterApi = createApi({
  reducerPath: "twitterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003/" }),
  endpoints: (builder) => ({
    getTweets: builder.query({
      query: (headerLink) => ({
        url: "/",
        method: "POST",
        body: {
          headerLink,
        },
      }),
    }),
  })
});

export const { useGetTweetsQuery } = twitterApi;
