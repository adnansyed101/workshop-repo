import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import OSPovider from "./context/OSProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OSPovider>
      <RouterProvider router={router} />
    </OSPovider>
  </StrictMode>
);
