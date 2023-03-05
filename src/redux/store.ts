import { configureStore } from "@reduxjs/toolkit";
import { twitterApi } from "./twitterApi";
import rootReducer from "./index";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(twitterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch