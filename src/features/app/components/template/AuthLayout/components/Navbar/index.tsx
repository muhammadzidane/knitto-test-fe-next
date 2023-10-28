"use client";

import { AppImage } from "@/features/app/components";

const Navbar: React.FC = () => (
  <div className="login__navbar">
    <AppImage
      width={143}
      height={42}
      src="/images/main-logo-black-1.png"
      alt="Deskripsi gambar"
      priority
    />
  </div>
);

export default Navbar;
