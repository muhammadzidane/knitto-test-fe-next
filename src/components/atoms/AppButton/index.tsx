"use client";

// React
import React, { useCallback } from "react";

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
  rounded = "small",
  variant,
  size = "medium",
  disabled,
  block,
  loading = false,
  width,
  height,
  icon,
  type = "button",
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
  const onClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      !loading && onClick?.(event);
    },
    [loading, onClick]
  );

  return (
    <button
      onClick={onClickButton}
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

export default AppButton;
