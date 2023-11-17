"use client";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";
// React
import React from "react";

const Content: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="login__content">
    <div className="login__content-inner">{children}</div>
  </div>
);

export default Content;
