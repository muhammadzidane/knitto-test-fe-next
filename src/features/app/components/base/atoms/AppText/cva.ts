// CVA
import { type VariantProps, cva } from "class-variance-authority";

export const text = cva("text", {
  variants: {
    color: {
      secondary: ["color-secondary"],
      blank: ["color-transparent"],
      facebook: ["color-facebook"],
      "white-1": ["color-white-1"],
      "dark-1": ["color-dark-1"],
      "gray-1": ["color-gray-1"],
      "gray-2": ["color-gray-2"],
      "gray-3": ["color-gray-3"],
      "gray-4": ["color-gray-4"],
      "gray-5": ["color-gray-5"],
      primary: ["color-primary"],
      spotify: ["color-spotify"],
      success: ["color-success"],
      warning: ["color-warning"],
      danger: ["color-danger"],
      info: ["color-info"],
    },
    size: {
      "2xlarge": ["text--2xlarge"],
      "3xlarge": ["text--3xlarge"],
      "4xlarge": ["text--4xlarge"],
      "5xlarge": ["text--5xlarge"],
      medium: ["text--medium"],
      xlarge: ["text--xlarge"],
      xsmall: ["text--xsmall"],
      large: ["text--large"],
      small: ["text--small"],
    },
    weight: {
      semibold: ["text--semibold"],
      "2xbold": ["text--2xbold"],
      normal: ["text--normal"],
      xbold: ["text--xbold"],
      bold: ["text--bold"],
    },
  },
});

type IAppColorProps =
  | "secondary"
  | "facebook"
  | "primary"
  | "spotify"
  | "success"
  | "warning"
  | "white-1"
  | "danger"
  | "dark-1"
  | "gray-1"
  | "gray-2"
  | "gray-3"
  | "gray-4"
  | "gray-5"
  | "blank"
  | "info";

export interface IAppTextProps extends VariantProps<typeof text> {
  /**
   * Size of the text
   */
  size?:
    | "5xlarge"
    | "4xlarge"
    | "3xlarge"
    | "2xlarge"
    | "medium"
    | "xlarge"
    | "xsmall"
    | "large"
    | "small";

  /**
   * Weight of the text
   */
  weight?: "semibold" | "2xbold" | "normal" | "xbold" | "bold";

  /**
   * Children default attribute
   */
  children: number | string;

  /**
   * Color of the text
   */
  color?: IAppColorProps;

  /**
   * Class default attribute
   */
  className?: string;
}
