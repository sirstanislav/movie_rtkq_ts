import { configureStore } from "@reduxjs/toolkit";
import { emptySplitApi } from "./emptySplitApi";
import rootReducer from "./index";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch