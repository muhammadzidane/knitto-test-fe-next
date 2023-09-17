"use client";

import { AppImage } from "@/features/app/components";

const Navbar: React.FC = () => (
  <div className="login__navbar">
    <AppImage
      width={143}
      height={42.86}
      src="/images/main-logo-black-1.png"
      alt="Deskripsi gambar"
    />
  </div>
);

export default Navbar;
