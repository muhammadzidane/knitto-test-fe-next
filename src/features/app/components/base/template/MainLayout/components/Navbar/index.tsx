"use client";

import { AppButton, AppImage } from "@/features/app/components";

import { Navigation } from "./components";
import "./styles.scss";

const Navbar: React.FC = () => (
  <header className="app__navbar">
    <Navigation />

    <div className="d-flex align-center gap-2">
      <AppButton rounded="large">
        <span className="text--xbold">Explore Premium</span>
      </AppButton>
      <AppButton icon="icon-download" variant="dark-1" rounded="large">
        <span className="text--xbold">Install App</span>
      </AppButton>
      <AppButton variant="plain">
        <AppImage
          src="/svg/icon-notification.svg"
          alt="Notification"
          height={18}
          width={18}
        />
      </AppButton>
    </div>
  </header>
);

export default Navbar;
