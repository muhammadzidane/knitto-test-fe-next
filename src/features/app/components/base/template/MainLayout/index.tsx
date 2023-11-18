"use client";

import { type IAppChildrenProps } from "@/features/app/interfaces";

import { Sidebar, Footer, Navbar } from "./components";

const MainLayout: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="app">
    <Sidebar />
    <div className="app__content">
      <Navbar />
      <div className="app__main-content">{children}</div>
    </div>
    <Footer />
  </div>
);

export default MainLayout;
