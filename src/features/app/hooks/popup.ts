import { popupHideToast, popupShowToast } from "../redux/slice/popupSlice";
import { useAppDispatch } from "./redux";

interface IShowToast {
  type: "success" | "error" | "info";
  description: string;
  title: string;
}

interface IUseToast {
  showToast: (payload: IShowToast) => void;
  hideToast: () => void;
}

export const useToast = (): IUseToast => {
  const dispatch = useAppDispatch();
  const showToast = (payload: IShowToast): void => {
    dispatch(popupShowToast(payload));
  };
  const hideToast = (): void => {
    dispatch(popupHideToast());
  };

  return { hideToast, showToast };
};
