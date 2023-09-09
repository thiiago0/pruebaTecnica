import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MyApplicationContext } from "./context/MyApplicationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyApplicationContext>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MyApplicationContext>
);
