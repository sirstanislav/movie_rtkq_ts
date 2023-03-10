import { emptySplitApi } from "./emptySplitApi";
import { Result } from '../Types/MoviesType';

export const saveMovieApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getSavedMovies: builder.query<Result[], void>({
      query: () => ({
        url: "http://localhost:3001/movies",
        method: "GET",
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Movies' as const, id })),
            { type: 'Movies', id: 'LIST' },
          ]
          : [{ type: 'Movies', id: 'LIST' }],
    }),
    saveMovie: builder.mutation<Result, {}>({
      query: (body) => ({
        url: "http://localhost:3001/movies",
        method: "POST",
        body
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Movies', id: 'LIST' }],
    }),
    deleteMovie: builder.mutation<Result, {}>({
      query: (id) => ({
        url: `http://localhost:3001/movies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Movies', id: 'LIST' }],
    }),
  })
});

export const {
  useGetSavedMoviesQuery,
  useSaveMovieMutation,
  useDeleteMovieMutation,
} = saveMovieApi;