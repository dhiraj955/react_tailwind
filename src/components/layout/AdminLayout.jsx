import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSider from "./AdminSider";
import AdminFooter from "./AdminFooter";
import { Navigate, Outlet } from "react-router";

function AdminLayout() {
  const isLoggedIn = !!localStorage.getItem("token");

  if(!isLoggedIn){
    return <Navigate to={"/signin"}/>
  }
  return (
    <div x-data="{ mobileSidebarOpen: false, desktopSidebarOpen: true }">
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-white lg:ps-64"
        x-bind:class="{ 'lg:ps-64': desktopSidebarOpen }"
      >
        <AdminSider />

        <AdminHeader />
        <div className="flex max-w-full ml-3 flex-auto flex-col pt-20">

        <Outlet />
        </div>


        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminLayout;
