import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const getUserAddressApi = createAsyncThunk(
  "address/getUserAddressApi",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const res = await axios.get(`${API_URL}/address/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.address;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch address"
      );
    }
  }
);

export default getUserAddressApi;
