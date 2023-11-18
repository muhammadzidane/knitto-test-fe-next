"use client";

import React from "react";

import { SessionProvider } from "next-auth/react";

import { type IAppChildrenProps } from "@/features/app/interfaces";

const NextAuthProvider: React.FC<IAppChildrenProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default NextAuthProvider;
