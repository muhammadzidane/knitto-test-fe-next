import { combineReducers } from "@reduxjs/toolkit";

import { popupSlice } from "@/features/app/redux/slice/popupSlice";
import { todoApi } from "@/features/todo/redux/rtk";

const plainReducers = {
  [todoApi.reducerPath]: todoApi.reducer,
  popup: popupSlice.reducer,
};

const reducers = combineReducers(plainReducers);

export { plainReducers, reducers };
