import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const createFeedBack = createAsyncThunk(
  "FeedBack/add",
  async (feedBackData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/add/feedBack/product`,
        feedBackData
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Failed to submit feedBack"
      );
    }
  }
);
