import React from "react";

// CVA
import { type IAppTextProps, text } from "./cva";

/**
 * Base text component
 */
const AppText: React.FC<IAppTextProps> = ({
  weight = "normal",
  size = "medium",
  className,
  children,
  color,
}) => {
  const textClassName = text({ className, weight, color, size });

  return <div className={textClassName}>{children}</div>;
};

export default AppText;
