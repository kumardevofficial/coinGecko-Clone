import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Fix the spelling of createBrowserRouter
import App from "./App.jsx";
import "./index.css";

// Create the router using createBrowserRouter
const router = createBrowserRouter([{ path: "/", element: <App /> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
