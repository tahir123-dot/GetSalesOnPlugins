// store/download/downloadSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchDownloads } from "./downloadApi";

const downloadSlice = createSlice({
  name: "download",
  initialState: {
    downloads: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearDownloads: (state) => {
      state.downloads = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDownloads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDownloads.fulfilled, (state, action) => {
        state.loading = false;
        state.downloads = action.payload;
      })
      .addCase(fetchDownloads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDownloads } = downloadSlice.actions;

export default downloadSlice.reducer;
