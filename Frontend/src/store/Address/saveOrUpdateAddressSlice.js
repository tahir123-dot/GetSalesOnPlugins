import { createSlice } from "@reduxjs/toolkit";
import saveOrUpdateAddressApi from "./saveOrUpdateAddressApi";

const saveOrUpdateAddressSlice = createSlice({
  name: "saveOrUpdateAddress",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetSaveAddressState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveOrUpdateAddressApi.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(saveOrUpdateAddressApi.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(saveOrUpdateAddressApi.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetSaveAddressState } = saveOrUpdateAddressSlice.actions;
export default saveOrUpdateAddressSlice.reducer;
