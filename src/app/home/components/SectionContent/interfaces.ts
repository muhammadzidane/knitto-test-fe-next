import { type IAppChildrenProps } from "@/features/app/interfaces";

export interface ISectionContentProps extends IAppChildrenProps {
  onClickShowAll?: () => void;
  showAll?: boolean;
  title: string;
}
