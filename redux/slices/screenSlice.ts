import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ScreenState {
  size: string;
}

const initialState: ScreenState = {
  size: "",
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,

  reducers: {
    setScreenSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
  },
});

export const { setScreenSize } = screenSlice.actions;

export const selectScreenSize = (state: RootState) => state.screen.size;

export default screenSlice.reducer;
