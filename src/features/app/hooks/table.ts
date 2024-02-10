import { useState } from "react";

export interface IPaginationHook {
  changeLimit: (value: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  currentLimit: number;
  currentPage: number;
}

export const usePagination = (): IPaginationHook => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentLimit, setCurrentLimit] = useState<number>(10);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const changeLimit = (value: number) => {
    setCurrentLimit(value);
  };

  return {
    currentLimit,
    changeLimit,
    currentPage,
    nextPage,
    prevPage,
  };
};
