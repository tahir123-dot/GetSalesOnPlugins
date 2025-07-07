import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

// ✅ Get All Blogs
export const getBlogsApi = createAsyncThunk(
  "blog/getBlogs",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${API_URL}/usr/blogs`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
