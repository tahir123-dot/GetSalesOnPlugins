import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getSingleBlogApi = createAsyncThunk(
  "blog/getSingleBlog",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${API_URL}/usr/blogs/${id}`);
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
