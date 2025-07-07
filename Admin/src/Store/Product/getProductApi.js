// Store/Product/getProductApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const getProductApi = createAsyncThunk(
  "product/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/AllProduct`);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to fetch products"
      );
    }
  }
);

export default getProductApi;
