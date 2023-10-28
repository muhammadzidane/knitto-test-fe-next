"use client";

// React
import React from "react";

// Next Auth
import { SessionProvider } from "next-auth/react";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";

const NextAuthProvider: React.FC<IAppChildrenProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default NextAuthProvider;
