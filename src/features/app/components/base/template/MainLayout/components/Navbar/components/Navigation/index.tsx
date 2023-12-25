import React from "react";

import { AppImage } from "@/features/app/components";

import "./styles.scss";

const Navigation = () => {
  return (
    <div>
      <AppImage
        src="/svg/icon-back-navigation.svg"
        className="icon-navigation"
        alt="Back Navigation"
        height={18}
        width={18}
      />
    </div>
  );
};

export default Navigation;
