import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";

export default function App() {
  const location = useLocation();

  const hideFooterRoutes = ["/user/register", "/user/login"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
}
