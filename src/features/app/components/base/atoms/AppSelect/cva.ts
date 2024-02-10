import { type VariantProps, cva } from "class-variance-authority";

export const select = cva("select", {
  variants: {},
});

export interface IOption {
  value: string | number;
  title: string;
}

export interface IAppSelectProps extends VariantProps<typeof select> {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOption[];
}
