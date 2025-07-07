import { createSlice } from "@reduxjs/toolkit";
import { removeFromCartApi } from "./cartRemoveApi";

const cartRemoveSlice = createSlice({
  name: "removeCart",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetRemoveCartState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeFromCartApi.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(removeFromCartApi.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.removedItem;
        state.error = null;
      })
      .addCase(removeFromCartApi.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Failed to remove from cart";
      });
  },
});

export const { resetRemoveCartState } = cartRemoveSlice.actions;
export default cartRemoveSlice.reducer;
