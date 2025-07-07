import { createSlice } from "@reduxjs/toolkit";
import deleteByID from "./deleteapi.js";

const deleteSlice = createSlice({
  name: "deleteProduct",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetDeleteState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteByID.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteByID.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true; 
        state.error = null;
      })
      .addCase(deleteByID.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload; 
      });
  },
});

export const { resetDeleteState } = deleteSlice.actions;
export default deleteSlice.reducer;
