import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Router>
);
