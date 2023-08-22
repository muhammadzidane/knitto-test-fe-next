// React
import React from "react";

// Next
import Image from "next/image";

// CVA
import { button, type IAppButtonProps } from "./cva";

/**
 * Base button component
 */
const AppButton = ({
  children,
  className,
  rounded,
  variant,
  size,
  disabled,
  block,
  loading,
  width,
  height,
  icon,
  type,
  onClick,
}: IAppButtonProps) => {
  const buttonClassName = button({
    className,
    rounded,
    variant,
    size,
    block,
    loading,
  });

  /**
   * @description Handle button click
   *
   * @returns void
   */
  // const onClickButton = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>): void => {
  //     !loading && onClick?.(event);
  //   },
  //   [loading, onClick]
  // );

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      style={{ width, height }}
      disabled={disabled}
      type={type}
    >
      {icon !== undefined && !loading && (
        <Image
          src={icon}
          className="mr-3"
          alt="Icon SVG"
          width={24}
          height={24}
        />
      )}
      {loading && (
        <Image
          className="btn__loading"
          src="rolling-0.8s-24px.svg"
          alt="Loading SVG"
        />
      )}
      <span>{children}</span>
    </button>
  );
};

AppButton.defaultProps = {
  type: "button",
  loading: false,
  rounded: "small",
  size: "medium",
};

export default AppButton;
