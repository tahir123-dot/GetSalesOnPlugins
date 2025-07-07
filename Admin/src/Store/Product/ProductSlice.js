import { createSlice } from "@reduxjs/toolkit";
import addProductApi from "./ProductApi";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    success: false,
    error: null,
    addedProduct: null,
  },
  reducers: {
    resetProductState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.addedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductApi.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(addProductApi.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.addedProduct = action.payload.newProduct; 
      })
      .addCase(addProductApi.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload?.error || "Something went wrong";
      });
  },
});

export const { resetProductState } = productSlice.actions;
export default productSlice.reducer;
