"use client";

// React
import React, { useCallback } from "react";

// Components
import { AppImage } from "@/features/app/components";

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
        <AppImage
          src={icon}
          className="mr-3"
          alt="Icon SVG"
          width={24}
          height={24}
        />
      )}
      {loading && (
        <AppImage
          className="btn__loading"
          src="/svg/rolling-0.8s-24px.svg"
          width={24}
          height={24}
          alt="Loading SVG"
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default AppButton;
