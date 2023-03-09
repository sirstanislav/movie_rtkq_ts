import { emptySplitApi } from "./emptySplitApi";
import { Result, MoviesArray } from '../Types/MoviesType';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const saveMovieApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getSavedMovies: builder.query<Result[], void>({
      query: () => ({
        url: "http://localhost:3001/movies",
        method: "GET",
      })
    }),
    saveMovie: builder.mutation<MoviesArray, {}>({
      query: (body) => ({
        url: "http://localhost:3001/movies",
        method: "POST",
        body
      })
    }),
  })
});

export const {
  useGetSavedMoviesQuery,
  useSaveMovieMutation
} = saveMovieApi;