import React, { ReactNode } from "react";

export interface propType {
  children: ReactNode;
}

const LoadingSkeleton:React.FC<propType> = ({ children }) => {
  return <>{children}</>;
};
export default LoadingSkeleton;
