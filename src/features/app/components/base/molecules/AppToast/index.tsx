"use client";

// Custom hooks
import { useAppSelector, useToast } from "@/features/app/hooks";
// Components
import { AppImage, AppText } from "@/features/app/components";
// React
import React, { useEffect } from "react";

// CVA
import { toast } from "./cva";

const AppToast: React.FC = () => {
  const { description, title, show, type } = useAppSelector(
    ({ popup }) => popup.popup.toast
  );
  const toastClassName = toast({ type });
  const { hideToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [hideToast]);

  /**
   * @description close toast
   *
   * @returns void
   */
  const onClose = (): void => {
    hideToast();
  };

  return (
    <>
      {show && (
        <div className={toastClassName}>
          <div className="toast__content">
            <AppText weight="bold">{title}</AppText>
            <AppText>{description}</AppText>
          </div>
          <AppImage
            src="/svg/icon-close-16x16.svg"
            className="toast__close"
            onClick={onClose}
            alt="Toast"
            height={16}
            width={16}
          />
        </div>
      )}
    </>
  );
};

export default AppToast;
