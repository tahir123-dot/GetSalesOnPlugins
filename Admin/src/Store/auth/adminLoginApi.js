import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // ✅ axios import karo

const API_URL = import.meta.env.VITE_BACKEND_URL;

// ✅ Correct login endpoint
const adminLoginApi = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const resp = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export default adminLoginApi;
