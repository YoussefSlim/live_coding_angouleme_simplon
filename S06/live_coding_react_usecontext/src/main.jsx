import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FirstContextProvider from "./context/firstContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstContextProvider>
      <App />
    </FirstContextProvider>
  </StrictMode>,
);
