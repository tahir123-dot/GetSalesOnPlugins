import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = import.meta.env.VITE_BACKEND_URL;

const fetchSingleOrder = createAsyncThunk(
  "user/fetchSingleOrder",
  async ({ orderId, token }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/order/${orderId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch order");

      return data.order;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export default fetchSingleOrder;
