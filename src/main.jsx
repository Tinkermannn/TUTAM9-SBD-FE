  import React from "react";
  import ReactDOM from "react-dom/client";
  import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

  import "./index.css";
  import App from "./App.jsx";
  import Home from "./pages/HomePage.jsx";
  import Login from "./pages/Login/Login.jsx";
  import Register from "./pages/Register/Register.jsx";
  import Profile from "./pages/Profile/Profile.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/user/login",
          element: <Login />,
        },
        {
          path: "/user/register",
          element: <Register />,
        },
        {
          path: "/user/profile/:user_id",
          element: <Profile />,
        },
        {
          path: "/user/dashboard/:user_id",
          element: <Dashboard />,
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
