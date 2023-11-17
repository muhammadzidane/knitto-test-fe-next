// React
// Components
import { AppText } from "@/features/app/components";
import React from "react";

// Interfaces
import { type IAppCheckBoxProps } from "./interfaces";

const AppCheckBox: React.FC<IAppCheckBoxProps> = ({ label, ...props }) => (
  <label className="d-flex gap-2 align-center">
    <input type="checkbox" {...props} />
    {label !== undefined && (
      <AppText weight="bold" size="small">
        {label}
      </AppText>
    )}
  </label>
);

export default AppCheckBox;
