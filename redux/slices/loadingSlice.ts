import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface LoadingState {
  totalImages: number;
  loadedImages: number;
  isFullyLoaded: boolean;
}

const initialState: LoadingState = {
  totalImages: 0,
  loadedImages: 0,
  isFullyLoaded: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    // Call this when components mount to register how many images they have
    registerImages: (state, action: PayloadAction<number>) => {
      state.totalImages += action.payload;
      // If images are registered dynamically, re-evaluate loading state
      state.isFullyLoaded =
        state.loadedImages >= state.totalImages && state.totalImages > 0;
    },

    // Call this inside the onLoad event of every Next.js Image component
    imageLoaded: (state) => {
      state.loadedImages += 1;
      if (state.loadedImages >= state.totalImages && state.totalImages > 0) {
        state.isFullyLoaded = true;
      }
    },

    // Force bypass the loader (e.g., if a timeout triggers or an image fails)
    forceLayoutReveal: (state) => {
      state.isFullyLoaded = true;
    },

    // Reset state if navigating between different portfolio pages
    resetLoader: (state) => {
      state.totalImages = 0;
      state.loadedImages = 0;
      state.isFullyLoaded = false;
    },
  },
});

// export actions
export const { registerImages, imageLoaded, forceLayoutReveal, resetLoader } =
  loadingSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectLoadingState = (state: RootState) => state.loading;

// export reducer
export default loadingSlice.reducer;
