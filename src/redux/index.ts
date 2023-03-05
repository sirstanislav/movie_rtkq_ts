import { combineReducers } from "@reduxjs/toolkit";
import { twitterApi } from "./twitterApi";
import openPopupSlice from "./openPopupSlice";

const rootReducer = combineReducers({
  [twitterApi.reducerPath]: twitterApi.reducer,
  openPopup: openPopupSlice,
});

export default rootReducer;