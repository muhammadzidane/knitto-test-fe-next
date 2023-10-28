"use client";

// Components
import { AppToast } from "@/features/app/components";

// Provider
import { Provider } from "react-redux";

// Store
import { persistor, store } from ".";
import { PersistGate } from "redux-persist/integration/react";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";

const ReduxProvider: React.FC<IAppChildrenProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
      <AppToast />
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
