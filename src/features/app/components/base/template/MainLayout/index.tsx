"use client";

import { type IAppChildrenProps } from "@/features/app/interfaces";

import { Content, Navbar } from "./components";

const MainLayout: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="d-flex flex-column h-full">
    <Navbar />
    <Content>{children}</Content>
  </div>
);

export default MainLayout;
