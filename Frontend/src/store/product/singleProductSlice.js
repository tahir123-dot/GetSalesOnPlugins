import { createSlice } from "@reduxjs/toolkit";
import getSingleProductApi from "./getSingleProductApi.js";


const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    loading: false,
    product: null,
    error: null,
  },
  reducers: {
    resetSingleProductState: (state) => {
      state.loading = false;
      state.product = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProductApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProductApi.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getSingleProductApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetSingleProductState } = singleProductSlice.actions;
export default singleProductSlice.reducer;
