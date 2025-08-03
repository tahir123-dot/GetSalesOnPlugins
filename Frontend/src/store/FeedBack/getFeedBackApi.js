import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getReviews = createAsyncThunk(
  "FeedBack/add",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/add/feedback/get/${productId}`);
      console.log("ya b rakh jani ", res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue("Error in Feedback get api ");
    }
  }
);
