import { createSlice } from "@reduxjs/toolkit";
import fetchSingleOrder from "./fetchSingleOrderApi";

const singleOrderSlice = createSlice({
  name: "userOrders",
  initialState: {
    loading: false,
    order: null,
    error: null,
  },
  reducers: {
    clearSingleOrder: (state) => {
      state.loading = false;
      state.order = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.order = null;
      })
      .addCase(fetchSingleOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(fetchSingleOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSingleOrder } = singleOrderSlice.actions;
export default singleOrderSlice.reducer;
