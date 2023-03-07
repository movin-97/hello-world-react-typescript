import React, { ReactNode } from "react";

export interface propType {
  children: ReactNode;
}

const LoadingSkeleton = ({ children }: propType) => {
  return <>{children}</>;
};
export default LoadingSkeleton;
