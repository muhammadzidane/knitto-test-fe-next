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
  size,
  color,
  weight,
}: // onClick,
IAppTextProps) => {
  const textClassName = text({ className, size, color, weight });

  // const onClickText = useCallback((): void => {
  //   onClick?.();
  // }, [onClick]);

  return <div className={textClassName}>{children}</div>;
};

AppText.defaultProps = {
  size: "medium",
  weight: "normal",
};

export default AppText;
