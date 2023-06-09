import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <main className="layout-main">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
