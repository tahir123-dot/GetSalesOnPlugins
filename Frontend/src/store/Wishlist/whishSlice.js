// src/store/Wishlist/wishSlice.js
import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "Wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishSlice.actions;
export default wishSlice.reducer;
