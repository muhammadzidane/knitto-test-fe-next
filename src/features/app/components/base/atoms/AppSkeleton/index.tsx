"use client";

import { type IAppSkeletonProps, skeleton } from "./cva";
import "./styles.scss";

const AppSkeleton: React.FC<IAppSkeletonProps> = ({
  height = "20px",
  width = "100%",
  className,
  rounded,
}) => {
  const skeletonClassName = skeleton({ className, rounded });

  return (
    <div className={skeletonClassName} style={{ height, width }}>
      <div className="skeleton__list" style={{ height }}></div>
    </div>
  );
};

export default AppSkeleton;
