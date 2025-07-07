// store/user/deleteUserApi.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchAllUsers } from "./fetchUsersApi";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const deleteUser = createAsyncThunk(
  "users/delete",
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_URL}/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Refetch users after delete
      dispatch(fetchAllUsers(token));
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to delete user");
    }
  }
);
