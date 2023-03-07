import React, { ReactNode } from "react";
export interface propType {
  children: ReactNode;
  name: string;
}
const Header = ({ children, name }: propType) => {
  return (
    <div>
      <h1>{children}</h1>
      <p>{name}</p>
    </div>
  );
};
export default Header;
