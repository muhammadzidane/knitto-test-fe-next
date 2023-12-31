import React from "react";

import { type IAppChildrenProps } from "@/features/app/interfaces";

import { Footer } from "./components";
import "./styles.scss";

const Content: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="app__main-content">
    <div className="mb-20">{children}</div>
    <Footer />
  </div>
);

export default Content;
