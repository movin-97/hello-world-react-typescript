import * as React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("../views/Home/Index"));

let routes = [
    {
        path: "/",
        element: <Home />
    }
]
export default routes;