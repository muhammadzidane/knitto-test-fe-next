// React
import React from "react";

// CVA
import { text, type IAppTextProps } from "./cva";

/**
 * Base text component
 */
const AppText = ({
  children,
  className,
  size = "medium",
  color,
  weight = "normal",
}: IAppTextProps) => {
  const textClassName = text({ className, size, color, weight });

  return <div className={textClassName}>{children}</div>;
};

export default AppText;
