import { combineReducers } from "@reduxjs/toolkit";
import stationReducer from "./stationSlice";
import loadingReducer from "./loadingSlice";
import screenReducer from "./screenSlice";

export const rootReducer = combineReducers({
  station: stationReducer,
  loading: loadingReducer,
  screen: screenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
