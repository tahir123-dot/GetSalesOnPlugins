import { createSlice } from "@reduxjs/toolkit";
import { createFeedBack } from "./feedBackApi";

const feedBackSlice = createSlice({
  name: "feedback",
  initialState: {
    loading: false,
    successFeed: false,
    errorFeed: null,
  },
  reducers: {
    resetFeedBackState: (state) => {
      state.loading = false;
      state.successFeed = false;
      state.errorFeed = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFeedBack.pending, (state) => {
        state.loading = true;
        state.successFeed = false;
        state.errorFeed = null;
      })
      .addCase(createFeedBack.fulfilled, (state, action) => {
        state.loading = false;
        state.successFeed = true;
        state.errorFeed = null;
      })
      .addCase(createFeedBack.rejected, (state, action) => {
        state.loading = false;
        state.successFeed = false;
        state.errorFeed = action.payload || "Something went wrong";
      });
  },
});

export const { resetFeedBackState } = feedBackSlice.actions;
export default feedBackSlice.reducer;
