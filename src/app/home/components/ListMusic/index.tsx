import React from "react";

import { AppImage, AppText } from "@/features/app/components";

import { type IListMusicProps } from "./interfaces";
import "./styles.scss";

const ListMusic: React.FC<IListMusicProps> = ({ artists, title, img }) => (
  <div className="list-music">
    <div>
      <AppImage
        className="mb-2"
        height={170}
        width={170}
        alt="title"
        src={img}
      />
    </div>
    <div>
      <AppText>{title}</AppText>
      <AppText>{artists}</AppText>
    </div>
  </div>
);

export default ListMusic;
