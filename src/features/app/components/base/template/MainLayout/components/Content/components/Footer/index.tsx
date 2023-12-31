import React from "react";

import { AppImage, AppText } from "@/features/app/components";

import { List } from "./components";
import "./styles.scss";

const Footer: React.FC = () => {
  const company = ["About", "Jobs", "For the Record"];
  const communities = [
    "For Artists",
    "Developers",
    "Adverting",
    "Investors",
    "Vendors",
  ];
  const usefulLinks = ["Support", "Free Mobile App"];
  const infoList = [
    "Label",
    "Privacy Center",
    "Privacy Policy",
    "Cookie",
    "About Ads",
    "Accessibility",
  ];

  return (
    <div className="app__main-footer">
      <div className="app__main-footer--links">
        <div className="d-flex gap-20">
          <List contents={company} title="Company" />
          <List contents={communities} title="Communities" />
          <List contents={usefulLinks} title="Useful Links" />
        </div>

        <div className="d-flex gap-5">
          <AppImage
            src="/svg/icon-instagram.svg"
            alt="Icon Instagram"
            height={16}
            width={16}
          />

          <AppImage
            src="/svg/icon-twitter.svg"
            alt="Icon Instagram"
            height={16}
            width={16}
          />

          <AppImage
            src="/svg/icon-facebook.svg"
            alt="Icon Instagram"
            height={16}
            width={16}
          />
        </div>
      </div>

      <div className="d-flex justify-between align-center">
        <div className="d-flex gap-3">
          {infoList.map((info, infoIndex) => (
            <AppText
              weight="semibold"
              key={infoIndex}
              color="gray-3"
              size="small"
            >
              {info}
            </AppText>
          ))}
        </div>

        <AppText weight="semibold" color="gray-3" size="small">
          &#169; 2023 Spotify AB
        </AppText>
      </div>
    </div>
  );
};

export default Footer;
