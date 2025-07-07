// placeOrderApi.js ya new file like fetchOrdersApi.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchUserOrders = createAsyncThunk(
  "orders/fetchUserOrders",
  async (token, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/order/getorder`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.orders;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Failed to fetch orders"
      );
    }
  }
);
