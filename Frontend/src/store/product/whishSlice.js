// store/Wishlist/whishSlice.js
import { createSlice } from "@reduxjs/toolkit";

// ✅ LocalStorage Helper
const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveWishlist = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const whishSlice = createSlice({
  name: "Wishlist",
  initialState: {
    wishlist: loadWishlist(), // ✅ Load from localStorage
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (!exists) {
        state.wishlist.push(action.payload);
        saveWishlist(state.wishlist); // ✅ Save to localStorage
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
      saveWishlist(state.wishlist); // ✅ Save to localStorage
    },
  },
});

export const { addToWishlist, removeFromWishlist } = whishSlice.actions;
export default whishSlice.reducer;
