// Store/Product/updateProduct/updateProductSlice.js
import { createSlice } from "@reduxjs/toolkit";
import updateProductApi from "./updateProductApi";

const updateProductSlice = createSlice({
  name: "updateProduct",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetUpdateState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProductApi.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateProductApi.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateProductApi.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpdateState } = updateProductSlice.actions;
export default updateProductSlice.reducer;
