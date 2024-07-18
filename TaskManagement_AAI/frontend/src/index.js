// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import RootApp from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);

reportWebVitals();
