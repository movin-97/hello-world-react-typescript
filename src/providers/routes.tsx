import * as React from "react";
import { Navigate } from "react-router-dom";
import AuthGuard from "./guard/auth-guard";

const MainLayout = React.lazy(() => import("../pages/MainLayout"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const Home = React.lazy(() => import("../pages/Home/Index"));
const Dashboard = React.lazy(()=> import('../pages/Dashboard/Index'))

let routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
];
export default routes;
