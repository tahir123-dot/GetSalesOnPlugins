import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./fetchUsersApi";
import { deleteUser } from "./deleteUserApi";

const userSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
    loading: false,
    error: null,
    totalUser: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.totalUser = action.payload.totalUsers;
        localStorage.setItem("Users", action.payload.totalUsers);
       
        
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ deleteUser handle
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u._id !== action.payload);
      });
  },
});

export default userSlice.reducer;
