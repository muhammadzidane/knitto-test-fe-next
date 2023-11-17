// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
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
import storage from "redux-persist/lib/storage";

// API
import { authApi } from "@/features/auth/redux/rtk";

// Reducers
import { reducers } from "./combineReducer";
// Middlewares
import { rtkQueryErrorLoggerMiddleware } from "./middleware";

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
