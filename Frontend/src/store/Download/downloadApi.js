// store/download/downloadApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchDownloads = createAsyncThunk(
  "download/fetch",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/userss/downloads`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.downloads;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch downloads"
      );
    }
  }
);
