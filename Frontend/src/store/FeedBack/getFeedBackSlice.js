import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./getFeedBackApi";

const getFeedBackSlice = createSlice({
  name: "getData",
  initialState: {
    loading: false,
    data: [],
    fetchSuccess: false,
    fetchError: null,
  },
  reducers: {
    resetFeedBackData: (state) => {
      state.loading = false;
      state.data = [];
      state.fetchSuccess = false;
      state.fetchError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.loading = true;
        state.fetchSuccess = false;
        state.fetchError = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.fetchSuccess = true;
        state.fetchError = null;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.loading = false;
        state.fetchSuccess = false;
        state.fetchError = action.payload || "Something went wrong";
      });
  },
});

export const { resetFeedBackData } = getFeedBackSlice.actions;
export default getFeedBackSlice.reducer;
