import React from "react";

import { AppText } from "@/features/app/components";

import { type IListProps } from "./interfaces";

const List: React.FC<IListProps> = ({ contents, title }) => (
  <div className="d-flex flex-column gap-2 px-3">
    <AppText weight="bold">{title}</AppText>
    {contents.map((content) => (
      <AppText weight="semibold" color="gray-3" key={content}>
        {content}
      </AppText>
    ))}
  </div>
);

export default List;
