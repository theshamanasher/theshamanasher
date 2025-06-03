import React from "react";
import "./Skeleton.css";

interface SkeletonProps {
  width?: string;  // Tailwind width class e.g., "w-full", "w-32"
  height?: string; // Tailwind height class e.g., "h-8", "h-12"
  className?: string; // Additional Tailwind classes
  ariaLabel?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "w-full",
  height = "h-4",
  className = "",
  ariaLabel = "Loading",
}) => {
  return (
    <div
      className={`${width} ${height} ${className} bg-gray-200 dark:bg-gray-700 skeleton-shimmer`}
      aria-busy="true"
      aria-label={ariaLabel}
    />
  );
};

export default Skeleton;
