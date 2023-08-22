// React
import React from "react";

// Interfaces
interface IContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => (
  <div className="login__content">
    <div className="login__content-inner">{children}</div>
  </div>
);

export default Content;
