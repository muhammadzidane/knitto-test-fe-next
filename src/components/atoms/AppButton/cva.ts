// React
import type React from "react";

// CVA
import { type VariantProps, cva } from "class-variance-authority";

export const button = cva("btn", {
  variants: {
    rounded: {
      small: ["btn--rounded-small"],
      large: ["btn--rounded-large"],
    },
    variant: {
      plain: ["btn--plain"],
      primary: ["btn--primary"],
      secondary: ["btn--secondary"],
      success: ["btn--success"],
      danger: ["btn--danger"],
      info: ["btn--info"],
      warning: ["btn--warning"],
      facebook: ["btn--facebook"],
      spotify: ["btn--spotify"],
      "dark-1": ["btn--dark-1"],
      "dark-4": ["btn--dark-4"],
      "gray-5": ["btn--gray-5"],
      blank: ["btn--transparent"],
    },
    size: {
      small: ["btn--small"],
      medium: ["btn--medium"],
      large: ["btn--large"],
    },
    block: {
      true: ["btn--block"],
    },
    loading: {
      true: ["btn--loading"],
    },
  },
});

export interface IAppButtonProps extends VariantProps<typeof button> {
  /**
   * Children default attribute
   */
  children: string | React.ReactNode;

  /**
   * Classname default attribute
   */
  className?: string;

  /**
   * Rounded of the button
   */
  rounded?: "small" | "large";

  /**
   * Size of the button
   */
  size?: "small" | "medium" | "large";

  /**
   * Disable button
   */
  disabled?: boolean;

  block?: boolean;

  /**
   * Loading of the button
   */
  loading?: boolean;

  /**
   * Width of the button
   */
  width?: string;

  /**
   * Height of the button
   */
  height?: string;

  /**
   * Icon of the button (set on left)
   */
  icon?: string;

  /**
   * Type of the button
   */
  type?: "button" | "submit";

  /**
   * Handle click
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
