// React
import React from "react";

// CVA
import { text, type IAppTextProps } from "./cva";

/**
 * Base text component
 */
const AppText: React.FC<IAppTextProps> = ({
  children,
  className,
  size = "medium",
  color,
  weight = "normal",
}) => {
  const textClassName = text({ className, size, color, weight });

  return <div className={textClassName}>{children}</div>;
};

export default AppText;
