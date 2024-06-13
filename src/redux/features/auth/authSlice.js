

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user; 
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      Cookies.remove("refreshToken");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
