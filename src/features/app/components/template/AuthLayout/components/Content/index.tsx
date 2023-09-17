"use client";

// React
import React from "react";

// Interfaces
import { type IChildrenProps } from "@/features/app/interfaces";

const Content: React.FC<IChildrenProps> = ({ children }) => (
  <div className="login__content">
    <div className="login__content-inner">{children}</div>
  </div>
);

export default Content;
