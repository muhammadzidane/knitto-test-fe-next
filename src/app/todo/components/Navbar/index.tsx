"use client";

import { AppImage } from "@/features/app/components";

import "./styles.scss";

const Navbar: React.FC = () => (
  <div className="login__navbar">
    <AppImage
      src="https://knitto.co.id/assets/svg/logoKnittoCircle.svg"
      alt="Deskripsi gambar"
      height={64}
      width={64}
      priority
    />
  </div>
);

export default Navbar;
