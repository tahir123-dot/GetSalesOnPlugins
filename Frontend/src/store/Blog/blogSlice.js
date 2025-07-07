import { createSlice } from "@reduxjs/toolkit";
import { getBlogsApi } from "./getBlogsApi";
import { getSingleBlogApi } from "./getSingleBlogApi";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    singleBlog: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSingleBlog: (state) => {
      state.singleBlog = null;
    },
  },
  extraReducers: (builder) => {
    // ✅ All blogs
    builder
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
      });

    // ✅ Single blog
    builder
      .addCase(getSingleBlogApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleBlogApi.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload;
      })
      .addCase(getSingleBlogApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSingleBlog } = blogSlice.actions;
export default blogSlice.reducer;
