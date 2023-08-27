// CVA
import { type VariantProps, cva } from "class-variance-authority";

export const skeleton = cva("skeleton", {
  variants: {
    rounded: {
      true: ["skeleton--rounded"],
    },
  },
});

export interface IAppSkeletonProps extends VariantProps<typeof skeleton> {
  /**
   * Class default attribute
   */
  className?: string;

  /**
   * Width of the skeleton
   */
  width?: string;

  /**
   * Height of the skeleton
   */
  height?: string;

  /**
   * Rounded of the skeleton
   */
  rounded?: boolean;
}
