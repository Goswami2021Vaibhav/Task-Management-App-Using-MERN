import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <div className="max-w-screen-sm mx-auto mt-10 p-5 shadow-sm border rounded">
      <ToastContainer />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;