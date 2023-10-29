"use client";

// Interfaces
import { skeleton, type IAppSkeletonProps } from "./cva";

const AppSkeleton: React.FC<IAppSkeletonProps> = ({
  className,
  width = "100%",
  height = "20px",
  rounded,
}) => {
  const skeletonClassName = skeleton({ className, rounded });

  return (
    <div className={skeletonClassName} style={{ width, height }}>
      <div className="skeleton__list" style={{ height }}></div>
    </div>
  );
};

export default AppSkeleton;
