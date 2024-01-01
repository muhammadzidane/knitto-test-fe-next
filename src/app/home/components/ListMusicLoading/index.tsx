import React from "react";

import { AppSkeleton } from "@/features/app/components";

const ListMusicLoading = () => (
  <>
    {[...Array(10)].map((number) => (
      <AppSkeleton height="256px" width="100%" key={number} rounded />
    ))}
  </>
);

export default ListMusicLoading;
