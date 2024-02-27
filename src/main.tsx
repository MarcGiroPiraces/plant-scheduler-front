import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { PlantsContextProvider } from "./providers/plantsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PlantsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlantsContextProvider>
  </React.StrictMode>
);
