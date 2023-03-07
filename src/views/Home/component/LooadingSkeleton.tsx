import React, { ReactNode } from "react";

export interface propType {
  children: ReactNode;
}

const HeaderSkeleton = ({ children }: propType) => {
  return <>{children}</>;
};
export default HeaderSkeleton;
