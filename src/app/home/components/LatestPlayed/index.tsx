import React from "react";

import { AppImage, AppText } from "@/features/app/components";

import { type IMyPlayListProps } from "./interfaces";
import "./styles.scss";

const LatestPlayed: React.FC<IMyPlayListProps> = ({ title, img }) => (
  <div className="my-playlist__list">
    <div className="my-playlist__list--image">
      <AppImage height={48} alt={title} width={48} src={img} />
    </div>
    <AppText className="px-2" weight="xbold" size="small">
      {title}
    </AppText>
  </div>
);

export default LatestPlayed;
