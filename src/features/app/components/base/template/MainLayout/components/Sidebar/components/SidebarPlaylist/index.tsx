import React from "react";

import { AppImage, AppText } from "@/features/app/components";

import { type ISidebarPlaylist } from "./interfaces";

const SidebarPlaylist: React.FC<ISidebarPlaylist> = ({
  artist,
  image,
  title,
}) => (
  <div className="d-flex align-center gap-3">
    <AppImage
      style={{ borderRadius: "4px" }}
      alt="sidebar playlist"
      height={47}
      src={image}
      width={47}
    />
    <div className="d-flex flex-column gap-1">
      <AppText weight="semibold">{title}</AppText>
      <div className="d-flex gap-2">
        <AppText weight="semibold" color="gray-3" size="small">
          Playlist
        </AppText>
        <AppText weight="semibold" color="gray-3" size="small">
          •
        </AppText>
        <AppText weight="semibold" color="gray-3" size="small">
          {artist}
        </AppText>
      </div>
    </div>
  </div>
);

export default SidebarPlaylist;
