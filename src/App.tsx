import React from "react";
import logo from "./logo.svg";
import routes from "./providers/routes";
import { Suspense } from "react";
import "./App.css";

import { useRoutes } from "react-router-dom";

import { Provider } from "inversify-react";
import { container } from "./inversify.config";

function App() {
  let route = useRoutes(routes);
  return (
    <Suspense>
      <Provider container={container}>
        <div className="App">{route}</div>
      </Provider>
    </Suspense>
  );
}

export default App;
