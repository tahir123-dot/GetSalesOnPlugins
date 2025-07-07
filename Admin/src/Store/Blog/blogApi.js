// store/blog/blogApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getBlogsApi = createAsyncThunk(
  "blog/getBlogs",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/blogs`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getSingleBlogApi = createAsyncThunk(
  "blog/getSingle",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/blogs/${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const createBlogApi = createAsyncThunk(
  "blog/create",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/admin/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.newBlog;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteBlogApi = createAsyncThunk(
  "blog/delete",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
