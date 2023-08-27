"use client";

// Provider
import { Provider } from "react-redux";

// Store
import { persistor, store } from ".";
import { PersistGate } from "redux-persist/integration/react";

// Interfaces
interface IReduxProvider {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: IReduxProvider) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
