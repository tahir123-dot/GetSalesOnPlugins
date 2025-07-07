import { createSlice } from "@reduxjs/toolkit";
import adminLoginApi from "./adminLoginApi";

const initialState = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  loading: null,
  error: null,
};

const adminSlice = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    login: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem("admin", JSON.stringify(action.payload)); // ✅ Save admin
    },
    logout: (state) => {
      state.admin = null;
      localStorage.removeItem("token"); // ✅ Remove token
      localStorage.removeItem("admin"); // ✅ Remove admin
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLoginApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLoginApi.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;

        // ✅ Save token and admin to localStorage
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("admin", JSON.stringify(action.payload.admin));
      })
      .addCase(adminLoginApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer;
