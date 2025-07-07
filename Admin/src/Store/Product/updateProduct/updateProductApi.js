// Store/Product/updateProduct/updateProductApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const updateProductApi = createAsyncThunk(
  "product/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export default updateProductApi;
