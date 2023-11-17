// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    accessToken: null,
    isLogin: false,
    userData: {},
  },
};

export const authSlice = createSlice({
  reducers: {
    authSetAuthenticatedUser: (state, { payload }): void => {
      state.auth = { ...state, ...payload, isLogin: true };
    },
    authLogout: (state): void => {
      state.auth = initialState.auth;
    },
  },
  initialState,
  name: "auth",
});

export const { authSetAuthenticatedUser, authLogout } = authSlice.actions;

export default authSlice.reducer;
