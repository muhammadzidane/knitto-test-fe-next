// Redux toolkit
import type { Middleware } from "@reduxjs/toolkit";

// Toast
import { popupShowToast } from "@/features/app/redux/slice/popupSlice";
import { isRejectedWithValue } from "@reduxjs/toolkit";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLoggerMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      const payload = action.payload.data.message;
      const description = payload ?? "Tejadi kesalahan";
      dispatch(popupShowToast({ title: "Error", type: "error", description }));
    }

    return next(action);
  };
