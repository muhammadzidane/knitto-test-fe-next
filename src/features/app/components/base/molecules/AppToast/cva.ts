import { type VariantProps, cva } from "class-variance-authority";

export const toast = cva("toast", {
  variants: {
    type: {
      success: "toast--success",
      error: "toast--error",
      info: "toast--info",
    },
  },
});

export interface IAppToastProps extends VariantProps<typeof toast> {
  type: "success" | "error" | "info";
}
