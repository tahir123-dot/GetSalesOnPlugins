import { createSlice } from "@reduxjs/toolkit";
import orderPlaced from "./placeOrderApi";

const placeOrderSlice = createSlice({
  name: "placeOrder",
  initialState: {
    loading: false,
    success: false,
    order: null,
    error: null,
  },
  reducers: {
    resetOrderState: (state) => {
      state.loading = false;
      state.success = false;
      state.order = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderPlaced.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(orderPlaced.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.order = action.payload;
      })
      .addCase(orderPlaced.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetOrderState } = placeOrderSlice.actions;
export default placeOrderSlice.reducer;
