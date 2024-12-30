import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/css/normalize.css";
import "../src/assets/css/index.css";
import "../src/assets/css/style.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
