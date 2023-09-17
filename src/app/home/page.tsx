"use client";

// Components
import { MainLayout, AppButton } from "@/features/app/components";
import { useAppDispatch } from "@/features/app/hooks";
import { authLogout } from "@/features/auth/redux/slice";
import { useCallback } from "react";

const Home = () => {
  const dispatch = useAppDispatch();

  /**
   * @description Handle logout
   *
   * @returns void.
   */
  const onClickLogout = useCallback((): void => {
    dispatch(authLogout());
  }, [dispatch]);

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
