import { createSlice } from "@reduxjs/toolkit";
import registerUser from "./registerApi";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        localStorage.setItem("token", action.payload.token);
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
        state.success = false;
      });
  },
});

export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
