import React from "react";

import { AppText } from "@/features/app/components";

const YourLibrary: React.FC = () => (
  <div className="d-flex justify-between px-3">
    <div className="d-flex align-center gap-1">
      {/* <ReactSVG src="icon-playlist.svg" /> */}
      <AppText className="px-2" color="gray-3" weight="bold">
        Your Library
      </AppText>
    </div>

    {/* <div className="d-flex align-center gap-4">
      <ReactSVG src="icon-add.svg" />
      <ReactSVG src="icon-forward-navigation.svg" />
    </div> */}
  </div>
);

export default YourLibrary;
