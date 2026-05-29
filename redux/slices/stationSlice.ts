import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const MAX_VALUE = 3;

export const StationNames = ["BIO", "SKILLS", "PORTFOLIO", "CONTACT"];
export interface Station {
  value: number;
  name: string;
}

// define initial state
const initialState: Station = {
  value: 0,
  name: "BIO",
};

// create slice
export const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    // define action to change station value
    nextStation: (state) => {
      if (state.value < MAX_VALUE) {
        state.value += 1;
        state.name = StationNames[state.value];
      } else {
        state.value = 0; // wrap around to the first station
        state.name = StationNames[state.value];
      }
    },
    prevStation: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        state.name = StationNames[state.value];
      } else {
        state.value = MAX_VALUE; // wrap around to the last station
        state.name = StationNames[state.value];
      }
    },
    gotoStation: (state, action: PayloadAction<number>) => {
      const newValue = action.payload;
      if (newValue >= 0 && newValue <= MAX_VALUE) {
        state.value = newValue;
        state.name = StationNames[state.value];
      }
    },
  },
});

// export actions
export const { nextStation, prevStation, gotoStation } = stationSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectStation = (state: RootState) => state.station.value;

// export reducer
export default stationSlice.reducer;
