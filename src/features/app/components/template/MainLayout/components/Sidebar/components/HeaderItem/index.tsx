// React
import React from "react";

// React SVG
// import { ReactSVG } from "react-svg";

// Components
import { AppImage, AppText } from "@/features/app/components";

// Interfaces
import { type IHeaderItemProps } from "./interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeaderItem: React.FC<IHeaderItemProps> = ({ icon, title, active }) => (
  <div className="d-flex align-center gap-5 cursor-pointer">
    <AppImage src={icon} width={24} height={24} alt="header item" />
    <AppText color={active ? "white-1" : "gray-4"} weight="bold">
      {title}
    </AppText>
  </div>
);

export default HeaderItem;