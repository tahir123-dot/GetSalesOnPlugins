// store/blog/blogSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getBlogsApi,
  getSingleBlogApi,
  createBlogApi,
  deleteBlogApi,
} from "./blogApi";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    selectedBlog: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedBlog: (state) => {
      state.selectedBlog = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // All Blogs
      .addCase(getBlogsApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Single Blog
      .addCase(getSingleBlogApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleBlogApi.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload;
      })
      .addCase(getSingleBlogApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Blog
      .addCase(createBlogApi.fulfilled, (state, action) => {
        state.blogs.unshift(action.payload); // insert at start
      })

      // Delete Blog
      .addCase(deleteBlogApi.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((b) => b._id !== action.payload);
      });
  },
});

export const { clearSelectedBlog } = blogSlice.actions;
export default blogSlice.reducer;
