# RTK Query

## About

In this project i learn the basics of Redux Toolkit Query. The benefit of this technology is caching data that not fetching repeatedly the previous result when you wanna go back.

![Preview](https://github.com/sirstanislav/movie_rtkq_ts/blob/dev/src/images/Main.png?raw=true)

## Tech

In my case i used one emptySplitApi to saparete code with posibility create two diferent fetchBaseQuery thanks at injectEndpoints.

```ts
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Movies'],
  endpoints: () => ({}),
});
```

Here i'm getting my saved movies. With mutation i can save new movie or delete existed. tagTypes and providesTags with invalidatesTags help synchronize result in real time when you switch between routes.

```ts
export const saveMovieApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getSavedMovies: builder.query<Result[], void>({
      query: () => ({
        url: 'http://localhost:3001/movies',
        method: 'GET',
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
        url: 'http://localhost:3001/movies',
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Movies', id: 'LIST' }],
    }),
    deleteMovie: builder.mutation<Result, {}>({
      query: (id) => ({
        url: `http://localhost:3001/movies/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Movies', id: 'LIST' }],
    }),
  }),
});
```
