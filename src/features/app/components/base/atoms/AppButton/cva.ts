// React
import type React from "react";

// CVA
import { type VariantProps, cva } from "class-variance-authority";

export const button = cva("btn", {
  variants: {
    variant: {
      secondary: ["btn--secondary"],
      blank: ["btn--transparent"],
      facebook: ["btn--facebook"],
      "dark-1": ["btn--dark-1"],
      "dark-4": ["btn--dark-4"],
      "gray-5": ["btn--gray-5"],
      primary: ["btn--primary"],
      spotify: ["btn--spotify"],
      success: ["btn--success"],
      warning: ["btn--warning"],
      danger: ["btn--danger"],
      plain: ["btn--plain"],
      info: ["btn--info"],
    },
    size: {
      medium: ["btn--medium"],
      large: ["btn--large"],
      small: ["btn--small"],
    },
    rounded: {
      large: ["btn--rounded-large"],
      small: ["btn--rounded-small"],
    },
    loading: {
      true: ["btn--loading"],
    },
    block: {
      true: ["btn--block"],
    },
  },
});

export interface IAppButtonProps extends VariantProps<typeof button> {
  /**
   * Variants attribute
   */
  variant?:
    | "secondary"
    | "facebook"
    | "primary"
    | "spotify"
    | "success"
    | "warning"
    | "danger"
    | "dark-1"
    | "dark-4"
    | "gray-5"
    | "blank"
    | "plain"
    | "info";

  /**
   * Handle click
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Size of the button
   */
  size?: "medium" | "large" | "small";

  /**
   * Children default attribute
   */
  children: React.ReactNode | string;

  /**
   * Rounded of the button
   */
  rounded?: "large" | "small";

  /**
   * Type of the button
   */
  type?: "button" | "submit";

  /**
   * Class default attribute
   */
  className?: string;

  /**
   * Disable button
   */
  disabled?: boolean;

  /**
   * Loading of the button
   */
  loading?: boolean;

  block?: boolean;

  /**
   * Height of the button
   */
  height?: string;

  /**
   * Width of the button
   */
  width?: string;

  /**
   * Icon of the button (set on left)
   */
  icon?: string;
}
