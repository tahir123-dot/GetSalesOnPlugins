import { createSlice } from "@reduxjs/toolkit";
import { addToCartApi } from "./cartAddApi";


const cartAddSlice = createSlice({
  name: "addCart",
  initialState: {
    loading: false,
    success: false,
    error: null,
    addedItem: null,
  },
  reducers: {
    resetAddToCartState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.addedItem = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartApi.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(addToCartApi.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.addedItem = action.payload;
      })
      .addCase(addToCartApi.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Failed to add to cart";
      });
  },
});

export const { resetAddToCartState } = cartAddSlice.actions;
export default cartAddSlice.reducer;
