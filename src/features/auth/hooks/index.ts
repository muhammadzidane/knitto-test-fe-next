// RTK
import { useAuthLoginMutation } from "../redux/rtk";

// Custom hook
import { useAppSelector } from "@/features/app/hooks/index";

export const useAuth = () => {
  const authState = useAppSelector((state) => state.auth.auth);

  const [authLogin, { isLoading: authLoginIsLoading }] = useAuthLoginMutation();

  return {
    authState,

    // Login
    authLogin,
    authLoginIsLoading,
  };
};
