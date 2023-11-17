"use client";

// Provider
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Components
import { AppToast } from "@/features/app/components";
// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";

// Store
import { persistor, store } from ".";

const ReduxProvider: React.FC<IAppChildrenProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      {children}
      <AppToast />
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
