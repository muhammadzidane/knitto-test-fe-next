"use client";

import { signOut } from "next-auth/react";

import { MainLayout, AppButton } from "@/features/app/components";

const Home: React.FC = () => {
  /**
   * @description Logout user
   *
   * @returns {void}
   */
  const onClickLogout = (): void => {
    void signOut();
  };

  return (
    <MainLayout>
      <AppButton
        onClick={onClickLogout}
        className="mt-5"
        rounded="large"
        variant="blank"
        size="large"
        block
      >
        LOGOUT
      </AppButton>
    </MainLayout>
  );
};

export default Home;
