// store/order/fetchSingleOrderApi.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const fetchSingleOrder = createAsyncThunk(
  "orders/fetchSingleOrder",
  async ({ orderId, token }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/admin/singleorder/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.order;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch order"
      );
    }
  }
);

export default fetchSingleOrder;
