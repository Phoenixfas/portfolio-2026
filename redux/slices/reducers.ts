import { combineReducers } from "@reduxjs/toolkit";
import stationReducer from "./stationSlice";

export const rootReducer = combineReducers({
  station: stationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
