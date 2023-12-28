import React from "react";

import { AppButton, AppText } from "@/features/app/components";

import { type ISectionContentProps } from "./interfaces";

const SectionContent: React.FC<ISectionContentProps> = ({
  onClickShowAll,
  children,
  showAll,
  title,
}) => (
  <div>
    <div className="d-flex align-center justify-between">
      <AppText
        size={showAll ? "2xlarge" : "5xlarge"}
        className="mb-5"
        weight="2xbold"
      >
        {title}
      </AppText>

      {showAll && (
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

export default SectionContent;
