"use client";

// Next Auth
import { signOut } from "next-auth/react";

// Components
import { MainLayout, AppButton } from "@/features/app/components";

// Custom Hooks

const Home: React.FC = () => {
  /**
   * @description Handle logout
   *
   * @returns void.
   */
  const onClickLogout = () => {
    void signOut();
  };

  return (
    <MainLayout>
      <AppButton
        onClick={onClickLogout}
        className="mt-5"
        variant="blank"
        size="large"
        rounded="large"
        block
      >
        LOGOUT
      </AppButton>
    </MainLayout>
  );
};

export default Home;
