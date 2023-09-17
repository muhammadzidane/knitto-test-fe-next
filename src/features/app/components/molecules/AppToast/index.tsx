"use client";

// React
import React, { useEffect } from "react";

// Components
import { AppImage, AppText } from "@/features/app/components";

// CVA
import { toast } from "./cva";

// Custom hooks
import { useAppSelector, useToast } from "@/features/app/hooks";

const AppToast: React.FC = () => {
  const { show, type, title, description } = useAppSelector(
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
            onClick={onClose}
            className="toast__close"
            src="/svg/icon-close-16x16.svg"
            alt="Toast"
            width={16}
            height={16}
          />
        </div>
      )}
    </>
  );
};

export default AppToast;
