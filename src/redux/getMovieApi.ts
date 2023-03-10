import { emptySplitApi } from "./emptySplitApi";
import { MoviesArray } from '../Types/MoviesType';

export const getMovieApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesArray, number | void>({
      query: (page = 1) => ({
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=` + page,
        method: "GET",
      })
    }),
    searchMovies: builder.query<MoviesArray, { searchValue: string, page: number } | { searchValue: void, page: void }>({
      query: ({ searchValue, page }) => ({
        url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=${page}&include_adult=true`,
        method: "GET",
      }),
    })
  })
});

export const {
  useGetMoviesQuery,
  useSearchMoviesQuery,
} = getMovieApi;