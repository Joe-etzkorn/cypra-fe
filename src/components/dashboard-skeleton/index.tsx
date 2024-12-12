import React from "react";
import { Skeleton } from "antd";

interface DashboardSkeletonProps {
  loading?: boolean;
  children: React.ReactNode;
}

const DashboardSkeleton: React.FC<DashboardSkeletonProps> = ({
  loading = false,
  children,
}) => {
  if (loading) {
    return <Skeleton.Input active />;
  }

  return <>{children}</>;
};

export default DashboardSkeleton;
