import { createSlice } from "@reduxjs/toolkit";
import getProductApi from "./getProductApi";

const getProductSlice = createSlice({
  name: "getProduct",
  initialState: {
    loading: false,
    products: [],
    error: null,
    totalCount: 0,
  },
  reducers: {
    resetGetProductState: (state) => {
      state.loading = false;
      state.products = [];
      state.error = null;
      state.totalCount = 0;
    },
    removeProductFromState: (state, action) => {
      const idToRemove = action.payload;
      state.products = state.products.filter((p) => p._id !== idToRemove);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductApi.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getProductApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetGetProductState, removeProductFromState } = getProductSlice.actions;
export default getProductSlice.reducer;
