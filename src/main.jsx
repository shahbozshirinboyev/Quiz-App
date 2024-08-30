import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Toaster [npm i react-hot-toast]
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster />
  </>
);
