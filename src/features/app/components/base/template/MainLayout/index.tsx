"use client";

import { type IAppChildrenProps } from "@/features/app/interfaces";

import { CurrentlyPlaying, Sidebar, Content, Navbar } from "./components";
import "./styles.scss";

const MainLayout: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="app">
    <Sidebar />
    <div className="app__content">
      <Navbar />
      <Content>{children}</Content>
    </div>
    <CurrentlyPlaying />
  </div>
);

export default MainLayout;
