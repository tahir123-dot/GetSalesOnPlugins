import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const removeFromCartApi = createAsyncThunk(
  "Cart/removeFromCartApi",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(`${API_URL}/cart/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to remove from cart"
      );
    }
  }
);
