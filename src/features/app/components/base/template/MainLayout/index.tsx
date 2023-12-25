"use client";

import { type IAppChildrenProps } from "@/features/app/interfaces";

import { Sidebar, Content, Footer, Navbar } from "./components";
import "./styles.scss";

const MainLayout: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="app">
    <Sidebar />
    <div className="app__content">
      <Navbar />
      <Content>{children}</Content>
    </div>
    <Footer />
  </div>
);

export default MainLayout;
