import React from "react";

import { type IAppChildrenProps } from "@/features/app/interfaces";

import "./styles.scss";

const Content: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="app__main-content">{children}</div>
);

export default Content;
