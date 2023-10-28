// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    accessToken: null,
    userData: {},
    isLogin: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSetAuthenticatedUser: (state, { payload }): void => {
      state.auth = { ...state, ...payload, isLogin: true };
    },
    authLogout: (state): void => {
      state.auth = initialState.auth;
    },
  },
});

export const { authSetAuthenticatedUser, authLogout } = authSlice.actions;

export default authSlice.reducer;
