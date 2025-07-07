import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL = import.meta.env.VITE_BACKEND_URL;
// 🎯 Add Product API Call
const addProductApi = createAsyncThunk("product/add", async (formData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(`${API_URL}/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // ✅ send token
      },
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export default addProductApi;
