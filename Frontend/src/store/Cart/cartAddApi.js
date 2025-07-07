// src/store/Cart/cartApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const addToCartApi = createAsyncThunk(
  "Cart/addToCartApi",
  async (cartItem, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/add`, cartItem);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message || "Failed to add to cart"
      );
    }
  }
);
