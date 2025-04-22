import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/HomePage.jsx";
import OS from './pages/OS.jsx'
import SBD from "./pages/SBD.jsx";
import DMJ from "./pages/DMJ.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/os",
        element: <OS />,
      },
      {
        path: "/sbd",
        element: <SBD />,
      },
      {
        path: "/dmj",
        element: <DMJ />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
