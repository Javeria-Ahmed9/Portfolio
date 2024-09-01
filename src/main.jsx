import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Intro.css";
import "./index.css";
import "./Skills.css";
import "./Projects.css";
import "./Education.css";
import "./Contact.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
