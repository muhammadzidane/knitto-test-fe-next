"use client";

// React
import React from "react";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";

const Content: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="login__content">
    <div className="login__content-inner">{children}</div>
  </div>
);

export default Content;
