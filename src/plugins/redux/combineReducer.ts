import { combineReducers } from "@reduxjs/toolkit";

import { popupSlice } from "@/features/app/redux/slice/popupSlice";
import { authApi } from "@/features/auth/redux/rtk";
import { authSlice } from "@/features/auth/redux/slice";

const plainReducers = {
  [authApi.reducerPath]: authApi.reducer,
  popup: popupSlice.reducer,
  auth: authSlice.reducer,
};

const reducers = combineReducers(plainReducers);

export { plainReducers, reducers };
