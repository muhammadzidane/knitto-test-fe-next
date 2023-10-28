"use client";

// React
import { useCallback } from "react";

// Components
import { MainLayout, AppButton } from "@/features/app/components";

// Custom Hooks
import { useAppDispatch } from "@/features/app/hooks";

// ! SLICE
import { authLogout } from "@/features/auth/redux/slice";

const Home: React.FC = () => {
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
