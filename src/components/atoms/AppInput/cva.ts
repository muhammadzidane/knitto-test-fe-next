import { type VariantProps, cva } from "class-variance-authority";

export const input = cva("input", {
  variants: {},
});

export interface IAppInputProps extends VariantProps<typeof input> {
  /**
   * Default class attribute
   */
  className?: string;

  /**
   * Default name attribute
   */
  name: string;

  /**
   * Default type attribute
   */
  type: string;

  /**
   * Default placeholder attribute
   */
  placeholder?: string;

  /**
   * Label of the input
   */
  label?: string;

  /**
   * Error message of the input
   */
  errorMessage?: string;
}
