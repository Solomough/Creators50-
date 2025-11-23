import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index";
import "./index.css"; // optional, if you have global styles

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
