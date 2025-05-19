import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-1 mt-10 pt-7">
        <Outlet />
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
