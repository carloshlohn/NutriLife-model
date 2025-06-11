import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyStyles from "./styles/GlobalStyles";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyStyles />
    <App />
  </StrictMode>
);
