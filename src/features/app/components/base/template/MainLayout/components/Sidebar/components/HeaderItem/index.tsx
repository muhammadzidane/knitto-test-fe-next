import React from "react";

import { AppImage, AppText } from "@/features/app/components";

import { type IHeaderItemProps } from "./interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeaderItem: React.FC<IHeaderItemProps> = ({ active, title, icon }) => (
  <div className="d-flex align-center gap-5 cursor-pointer">
    <AppImage alt="header item" height={24} src={icon} width={24} />
    <AppText color={active ? "white-1" : "gray-4"} weight="bold">
      {title}
    </AppText>
  </div>
);

export default HeaderItem;
