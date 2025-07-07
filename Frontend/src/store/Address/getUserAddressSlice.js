import { createSlice } from "@reduxjs/toolkit";
import getUserAddressApi from "./getUserAddressApi";

const getUserAddressSlice = createSlice({
  name: "getUserAddress",
  initialState: {
    address: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetGetAddressState: (state) => {
      state.address = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAddressApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserAddressApi.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
        console.log(state.address);
      })
      .addCase(getUserAddressApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetGetAddressState } = getUserAddressSlice.actions;
export default getUserAddressSlice.reducer;
