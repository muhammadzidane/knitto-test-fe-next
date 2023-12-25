"use client";

import React, { useCallback } from "react";

import { AppImage } from "@/features/app/components";

import { type IAppButtonProps, button } from "./cva";
import "./styles.scss";

/**
 * Base button component
 */
const AppButton: React.FC<IAppButtonProps> = ({
  rounded = "small",
  loading = false,
  size = "medium",
  type = "button",
  className,
  children,
  disabled,
  onClick,
  variant,
  height,
  block,
  width,
  icon,
}) => {
  const buttonClassName = button({
    className,
    loading,
    rounded,
    variant,
    block,
    size,
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
      style={{ height, width }}
      disabled={disabled}
      type={type}
    >
      {icon && !loading && (
        <AppImage
          src={`/svg/${icon}.svg`}
          className="mr-3"
          alt="Icon SVG"
          height={24}
          width={24}
        />
      )}
      {loading && (
        <AppImage
          src="/svg/icon-rolling-0.8s.svg"
          className="btn__loading"
          alt="Loading SVG"
          height={24}
          width={24}
          priority
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default AppButton;
