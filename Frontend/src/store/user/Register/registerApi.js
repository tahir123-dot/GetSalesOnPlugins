import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const registerUser = createAsyncThunk(
  "user/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        username,
        email,
        password,
      });

      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export default registerUser;
