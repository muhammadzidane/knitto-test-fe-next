// RTK
import { useLoginMutation } from "../redux/rtk";

// Custom hook
import { useAppSelector } from "@/features/app/hooks/index";

export const useAuth = () => {
  const authData = useAppSelector((state) => state.auth.auth);

  const [login, { data: dataLogin, isLoading: isLoadingLogin }] =
    useLoginMutation();

  return {
    authData,

    login,
    dataLogin,
    isLoadingLogin,
  };
};
