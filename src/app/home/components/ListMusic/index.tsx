import React from "react";

import { AppImage, AppText } from "@/features/app/components";

import { type IListMusicProps } from "./interfaces";
import "./styles.scss";

const ListMusic: React.FC<IListMusicProps> = ({ artists, title, img }) => (
  <div className="list-music">
    <div>
      <AppImage
        style={{ objectFit: "contain", height: "170px", width: "100%" }}
        className="mb-2"
        sizes="100vw"
        alt={title}
        height={0}
        width={0}
        src={img}
      />
    </div>
    <div>
      <AppText className="mb-1" weight="bold">
        {title}
      </AppText>
      <AppText weight="semibold" color="gray-3">
        {artists}
      </AppText>
    </div>
  </div>
);

export default ListMusic;
