"use client";

import React from "react";

import { AppButton, AppSelect, AppText } from "@/features/app/components";

export interface IPaginationProps {
  onChangeLimit: (value: number) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  currentPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({
  onChangeLimit,
  currentPage,
  onClickPrev,
  onClickNext,
}) => {
  const limitOptions = [
    { title: "10", value: 10 },
    { title: "25", value: 25 },
    { title: "50", value: 50 },
    { title: "100", value: 100 },
  ];

  return (
    <div className="d-flex justify-between align-center">
      <div className="d-flex gap-1">
        <AppText weight="bold">Page: </AppText>
        <AppText weight="bold">{currentPage + 1}</AppText>
      </div>

      <div className="d-flex gap-4">
        <div className="d-flex align-center">
          <AppSelect onChange={onChangeLimit} options={limitOptions} />
        </div>

        <div className="d-flex align-center gap-2">
          {currentPage !== 0 && (
            <AppButton onClick={onClickPrev}>Prev</AppButton>
          )}
          <AppButton onClick={onClickNext}>Next</AppButton>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
