import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./components/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/about", element: <About /> },
  { path: "/skills", element: <h1>Skills</h1> },
  { path: "/services", element: <h1>Services</h1> },
  { path: "/portfolio", element: <h1>Portfolio</h1> },
  { path: "/contact", element: <h1>Contact</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
