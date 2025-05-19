import React from "react";
import { NavLink } from "react-router";
import Logout from "../UI/Logout";

function AdminSider() {
  return (
    <nav
      id="page-sidebar"
      className="fixed start-0 top-0 bottom-0 z-50 flex h-full w-80 flex-col overflow-auto bg-slate-100 transition-transform duration-500 ease-out lg:w-64 lg:translate-x-0"
          x-bind:class="{
      'ltr:-translate-x-full rtl:translate-x-full': !mobileSidebarOpen,
      'translate-x-0': mobileSidebarOpen,
      'lg:ltr:-translate-x-full lg:rtl:translate-x-full': !desktopSidebarOpen,
      'lg:ltr:translate-x-0 lg:rtl:translate-x-0': desktopSidebarOpen,
    }"
          aria-label="Main Sidebar Navigation"
      x-cloak=""
    >
      <div className="flex h-20 w-full flex-none items-center justify-between px-8">
        <NavLink to={"/"}>
          <span className="font-bold text-3xl">Cartista</span>
        </NavLink>
        <div className="lg:hidden">
          <button
            type="button"
            className="flex size-10 items-center justify-center text-slate-400 hover:text-slate-600 active:text-slate-400"
            x-on:click="mobileSidebarOpen = false"
          >
            <svg
              className="hi-solid hi-x -mx-1 inline-block size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <ul className="w-full flex flex-col grow space-y-1.5 px-8 py-4">
          <NavLink
            to={"/admin/dashboard"}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-100 px-2 py-1 text-sm font-semibold text-indigo-900 transition"
          >
            {" "}
            <li>
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink
            to={"/admin/products"}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-900"
          >
            <li>
              <span>Products</span>
            </li>
          </NavLink>
          <NavLink
            to={"/admin/users"}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-900"
          >
            <li>
              <span>Users</span>
            </li>
          </NavLink>
          <NavLink
            to={"/admin/accordion"}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-900"
          >
            <li>
              <span>Accordion</span>
            </li>
          </NavLink>
        </ul>
        <ul className="w-full grow space-y-1.5 px-8 py-4">
          <li>
            <a
              href="javascript:void(0)"
              className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-900"
            >
              <span>Settings</span>
            </a>
          </li>
          <li>
            <Logout className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-900" />
          </li>
        </ul>
      </div>
      {/* END Main Navigation */}
    </nav>
  );
}

export default AdminSider;
