// CVA
import { cva, type VariantProps } from "class-variance-authority";

export const text = cva("text", {
  variants: {
    size: {
      xsmall: ["text--xsmall"],
      small: ["text--small"],
      medium: ["text--medium"],
      large: ["text--large"],
      xlarge: ["text--xlarge"],
      "2xlarge": ["text--2xlarge"],
    },
    color: {
      primary: ["color-primary"],
      secondary: ["color-secondary"],
      success: ["color-success"],
      danger: ["color-danger"],
      info: ["color-info"],
      warning: ["color-warning"],
      facebook: ["color-facebook"],
      spotify: ["color-spotify"],
      "white-1": ["color-white-1"],
      "dark-1": ["color-dark-1"],
      "gray-1": ["color-gray-1"],
      "gray-2": ["color-gray-2"],
      "gray-3": ["color-gray-3"],
      "gray-4": ["color-gray-4"],
      "gray-5": ["color-gray-5"],
      blank: ["color-transparent"],
    },
    weight: {
      normal: ["text--normal"],
      semibold: ["text--semibold"],
      bold: ["text--bold"],
      xbold: ["text--xbold"],
      "2xbold": ["text--2xbold"],
    },
  },
});

type TColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "warning"
  | "facebook"
  | "spotify"
  | "white-1"
  | "dark-1"
  | "gray-1"
  | "gray-2"
  | "gray-3"
  | "gray-4"
  | "gray-5"
  | "blank";

// Interfaces
export interface IAppTextProps extends VariantProps<typeof text> {
  /**
   * Class default attribute
   */
  className?: string;

  /**
   * Children default attribute
   */
  children: string | number;

  /**
   * Size of the text
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "2xlarge";

  /**
   * Color of the text
   */
  color?: TColor;

  /**
   * Weight of the text
   */
  weight?: "normal" | "bold" | "semibold" | "xbold" | "2xbold";

  /**
   * Handle click
   */
  onClick?: () => void;
}
