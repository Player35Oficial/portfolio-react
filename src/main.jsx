import React from "react";
import ReactDOM from "react-dom/client";
import UserProfile from "./UserProfile";
import UserPortfolio from "./UserPortfolio";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProfile />
    <UserPortfolio />
  </React.StrictMode>
);
