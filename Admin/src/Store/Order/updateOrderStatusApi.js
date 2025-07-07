// store/order/updateOrderStatusApi.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ orderId, status, token }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(
        `${API_URL}/admin/order/${orderId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to update order status"
      );
    }
  }
);
