import { combineReducers } from "@reduxjs/toolkit";
import { getMovieApi } from "./getMovieApi";
import { saveMovieApi } from "./saveMovieApi";
import movieDataSlice from "./movieDataSlice";

const rootReducer = combineReducers({
  [getMovieApi.reducerPath]: getMovieApi.reducer,
  [saveMovieApi.reducerPath]: saveMovieApi.reducer,
  movieData: movieDataSlice,
});

export default rootReducer;