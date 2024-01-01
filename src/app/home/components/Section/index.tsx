import React from "react";

import { AppSkeleton, AppButton, AppText } from "@/features/app/components";

import { type ISectionProps } from "./interfaces";

const Section: React.FC<ISectionProps> = ({
  onClickShowAll,
  children,
  showAll,
  loading,
  title,
}) => (
  <div>
    <div className="d-flex align-center justify-between">
      {loading ? (
        <AppSkeleton className="mb-5" width="300px" height="34px" rounded />
      ) : (
        <AppText
          size={showAll ? "2xlarge" : "5xlarge"}
          className="mb-5"
          weight="2xbold"
        >
          {title}
        </AppText>
      )}

      {showAll && !loading && (
        <AppButton onClick={onClickShowAll} variant="plain">
          <AppText
            className="cursor-pointer"
            color="gray-3"
            weight="bold"
            size="small"
          >
            Show all
          </AppText>
        </AppButton>
      )}
    </div>
    <div>{children}</div>
  </div>
);

export default Section;
