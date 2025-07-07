import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const orderPlaced = createAsyncThunk(
  "user/order",
  async ({ paymentData, token }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/order`, paymentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to save Payment"
      );
    }
  }
);

export default orderPlaced;
