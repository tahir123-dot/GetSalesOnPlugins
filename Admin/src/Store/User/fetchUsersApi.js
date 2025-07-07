import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (token, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);
