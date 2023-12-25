"use client";

import React from "react";

import { type IAppChildrenProps } from "@/features/app/interfaces";

import "./styles.scss";

const Content: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="login__content">
    <div className="login__content-inner">{children}</div>
  </div>
);

export default Content;
