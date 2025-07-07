// src/store/Cart/getUserCartApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const getUserCartApi = createAsyncThunk(
  "Cart/getUserCartApi",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/cart/${userId}`);
      return res.data; 
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch cart items"
      );
    }
  }
);

export default getUserCartApi;