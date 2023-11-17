// Redux Toolkit
// Redux Persist
import {
  persistReducer,
  persistStore,
  REHYDRATE,
  REGISTER,
  PERSIST,
  FLUSH,
  PAUSE,
  PURGE,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
// API
import { authApi } from "@/features/auth/redux/rtk";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

// Middlewares
import { rtkQueryErrorLoggerMiddleware } from "./middleware";
// Reducers
import { reducers } from "./combineReducer";

// Config for Redux Persist
const persistConfig = {
  whitelist: ["auth"],
  key: "root",
  version: 1,
  storage,
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// eslint-disable-next-line no-underscore-dangle
// const preloadedState = window.__PRELOADED_STATE__;

// Store
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }).concat(rtkQueryErrorLoggerMiddleware, authApi.middleware),
  reducer: persistedReducer,
  // preloadedState,
});

// Persist Store
const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };

// App Store
export type TRootState = ReturnType<typeof store.getState>;

// Root State
export type TRootDispatch = typeof store.dispatch;
