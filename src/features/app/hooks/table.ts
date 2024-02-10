import { useState } from "react";

export interface IPaginationHook {
  changeLimit: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLimit = (value: any) => {
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
