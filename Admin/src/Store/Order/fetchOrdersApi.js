// store/order/fetchOrdersApi.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchAllOrders = createAsyncThunk(
  "orders/fetchAllOrders",
  async (token, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/allorders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch orders");
    }
  }
);
