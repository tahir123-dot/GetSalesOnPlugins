// src/store/Cart/cartGetSlice.js
import { createSlice } from "@reduxjs/toolkit";
import getUserCartApi from "./getUserCartApi";

const cartGetSlice = createSlice({
  name: "getCart",
  initialState: {
    loading: false,
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCartApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserCartApi.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.cart;
        state.totalItems = action.payload.totalCount;
        state.totalPrice = action.payload.totalPrice;
        console.log(state.cartItems);
      })
      .addCase(getUserCartApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartGetSlice.reducer;
