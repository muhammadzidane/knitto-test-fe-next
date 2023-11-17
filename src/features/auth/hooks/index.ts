// RTK
// Custom hook
import { useAppSelector } from "@/features/app/hooks/index";

import { useAuthLoginMutation } from "../redux/rtk";

export const useAuth = () => {
  const authState = useAppSelector((state) => state.auth.auth);

  const [authLogin, { isLoading: authLoginIsLoading }] = useAuthLoginMutation();

  return {
    authLoginIsLoading,

    // Login
    authLogin,
    // State
    authState,
  };
};
