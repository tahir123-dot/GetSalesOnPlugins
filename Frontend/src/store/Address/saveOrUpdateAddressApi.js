import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const saveOrUpdateAddressApi = createAsyncThunk(
  "address/saveOrUpdateAddressApi",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API_URL}/address`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.address;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to save/update address"
      );
    }
  }
);

export default saveOrUpdateAddressApi;
