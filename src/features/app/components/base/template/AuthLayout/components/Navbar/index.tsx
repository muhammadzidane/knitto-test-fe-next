"use client";

import { AppImage } from "@/features/app/components";

import "./styles.scss";

const Navbar: React.FC = () => (
  <div className="login__navbar">
    <AppImage
      src="/images/main-logo-black-1.png"
      alt="Deskripsi gambar"
      height={42}
      width={143}
      priority
    />
  </div>
);

export default Navbar;
