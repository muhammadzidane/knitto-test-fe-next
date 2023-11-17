"use client";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";
// Next Auth
import { SessionProvider } from "next-auth/react";
// React
import React from "react";

const NextAuthProvider: React.FC<IAppChildrenProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default NextAuthProvider;
