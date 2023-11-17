// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: {
    toast: {
      description: "",
      show: false,
      type: null,
      title: "",
    },
  },
};

export const popupSlice = createSlice({
  reducers: {
    popupShowToast: (state, { payload }) => {
      state.popup.toast = { ...state.popup.toast, ...payload, show: true };
    },
    popupHideToast: (state) => {
      state.popup.toast = initialState.popup.toast;
    },
  },
  name: "popup",
  initialState,
});

export const { popupHideToast, popupShowToast } = popupSlice.actions;

export default popupSlice.reducer;
