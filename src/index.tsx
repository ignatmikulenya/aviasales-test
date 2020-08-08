import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import BoardStoreProvider from "./providers/board-store-provider";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BoardStoreProvider>
      <App />
    </BoardStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
