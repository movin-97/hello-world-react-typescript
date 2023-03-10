import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

interface Props {
  children: ReactNode;
}

function AuthGuard({ children }: Props) {
  let isTokenExpried = useAuth();
  if(isTokenExpried) return <Navigate to="/login"/>
  
  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
