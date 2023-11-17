import { type VariantProps, cva } from "class-variance-authority";

export const input = cva("input", {
  variants: {},
});

export interface IAppInputProps extends VariantProps<typeof input> {
  /**
   * Error message of the input
   */
  errorMessage?: string;

  /**
   * Default placeholder attribute
   */
  placeholder?: string;

  /**
   * Default class attribute
   */
  className?: string;

  /**
   * Label of the input
   */
  label?: string;

  /**
   * Default name attribute
   */
  name: string;

  /**
   * Default type attribute
   */
  type: string;
}
