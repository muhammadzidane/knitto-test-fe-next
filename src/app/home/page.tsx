"use client";

import { useState } from "react";

import { signOut } from "next-auth/react";

import { MainLayout, AppButton, AppText } from "@/features/app/components";

const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  /**
   * @description Handle logout
   *
   * @returns void.
   */
  const onClickLogout = () => {
    void signOut();
  };

  const onClickIncrement = () => {
    setCounter((value) => value + 1);
  };

  const onClickDecrement = () => {
    setCounter((value) => {
      if (value > 0) {
        return value - 1;
      }
      return value;
    });
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

      <AppText color="secondary">{counter}</AppText>

      <div className="d-flex gap-2 mt-5">
        <AppButton onClick={onClickIncrement}>Tambah</AppButton>
        <AppButton onClick={onClickDecrement}>Kurang</AppButton>
      </div>
    </MainLayout>
  );
};

export default Home;
