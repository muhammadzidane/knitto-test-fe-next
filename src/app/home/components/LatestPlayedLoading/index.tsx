import React from "react";

import { AppSkeleton } from "@/features/app/components";

const LatestPlayedLoading = () => (
  <>
    {[...Array(6)].map((number) => (
      <div className="d-flex gap-2" key={number}>
        <AppSkeleton height="48px" width="55px" rounded />
        <AppSkeleton height="48px" width="100%" rounded />
      </div>
    ))}
  </>
);

export default LatestPlayedLoading;
