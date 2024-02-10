import React from "react";

import { AppSkeleton } from "@/features/app/components";

const LoadingList: React.FC = () => {
  return (
    <div className="d-flex flex-column gap-6">
      {[...Array(10)].map((index) => (
        <AppSkeleton height="20px" width="100%" key={index} />
      ))}
    </div>
  );
};

export default LoadingList;
