import React from 'react';
import logo from './logo.svg';
import routes from "./providers/routes";
import { Suspense } from "react";
import './App.css';

import { useRoutes } from "react-router-dom";

function App() {
  let route = useRoutes(routes);
  return (
    <Suspense>
      <div className="App">{route}</div>
    </Suspense>
  );
}

export default App;
