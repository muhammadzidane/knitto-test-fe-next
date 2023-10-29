"use client";

// Components
import { Sidebar, Navbar, Footer } from "./components";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";

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
