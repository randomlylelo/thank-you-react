import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* Set Default Font */}
    <div className="font-sans xl:bg-grayPc">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
