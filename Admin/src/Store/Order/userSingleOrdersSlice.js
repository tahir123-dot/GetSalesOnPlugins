// store/order/userSingleOrdersSlice.js

import { createSlice } from "@reduxjs/toolkit";
import fetchSingleOrder from "./fetchSingleOrderApi";

const userSingleOrdersSlice = createSlice({
  name: "userSingleOrders",
  initialState: {
    order: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
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

export default userSingleOrdersSlice.reducer;
