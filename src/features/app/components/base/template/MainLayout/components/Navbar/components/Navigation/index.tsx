import React from "react";

import { AppImage } from "@/features/app/components";

import "./styles.scss";

const Navigation: React.FC = () => (
  <div className="d-flex gap-2">
    <div className="icon-navigation">
      <AppImage
        src="/svg/icon-back-navigation.svg"
        alt="Back Navigation"
        height={18}
        width={18}
      />
    </div>

    <div className="icon-navigation">
      <AppImage
        src="/svg/icon-forward-navigation.svg"
        alt="Back Navigation"
        height={18}
        width={18}
      />
    </div>
  </div>
);

export default Navigation;
