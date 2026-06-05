import { combineReducers } from "@reduxjs/toolkit";
import stationReducer from "./stationSlice";
import loadingReducer from "./loadingSlice";

export const rootReducer = combineReducers({
  station: stationReducer,
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
