// Redux toolkit
// Slices
import { popupSlice } from "@/features/app/redux/slice/popupSlice";
import { authSlice } from "@/features/auth/redux/slice";
// RTK
import { authApi } from "@/features/auth/redux/rtk";
import { combineReducers } from "@reduxjs/toolkit";

const plainReducers = {
  [authApi.reducerPath]: authApi.reducer,
  popup: popupSlice.reducer,
  auth: authSlice.reducer,
};

const reducers = combineReducers(plainReducers);

export { plainReducers, reducers };
