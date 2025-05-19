import React from 'react'

function AdminHeader() {
  return (
  <header
        id="page-header"
        className="fixed start-0 end-0 top-0 z-30 flex h-20 flex-none items-center border-b border-slate-100 bg-white/90 backdrop-blur-xs"
        x-bind:class="{ 'lg:ps-64': desktopSidebarOpen }"
      >
        <div className="container mx-auto flex justify-between px-4 lg:px-8 xl:max-w-7xl">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Toggle Sidebar on Mobile */}
            <div className="me-2 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border-slate-100 bg-slate-100 px-2.5 py-2 leading-6 font-semibold text-slate-800 hover:border-slate-200 hover:bg-slate-200 hover:text-slate-800 focus:ring-3 focus:ring-indigo-500/25 focus:outline-hidden active:border-slate-100 active:bg-slate-100"
                x-on:click="mobileSidebarOpen = true"
              >
                <svg
                  className="hi-solid hi-menu-alt-1 inline-block size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* END Toggle Sidebar on Mobile */}
            {/* Toggle Sidebar on Desktop */}
            <div className="hidden lg:block">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border-slate-100 bg-slate-100 px-2.5 py-2 leading-6 font-semibold text-slate-800 hover:border-slate-200 hover:bg-slate-200 hover:text-slate-800 focus:ring-3 focus:ring-indigo-500/25 focus:outline-hidden active:border-slate-100 active:bg-slate-100"
                x-on:click="desktopSidebarOpen = !desktopSidebarOpen"
              >
                <svg
                  className="hi-solid hi-menu-alt-1 inline-block size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* END Toggle Sidebar on Desktop */}
          </div>
          {/* END Left Section */}
          {/* Middle Section */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Brand */}
            <a
              href="javascript:void(0)"
              className="inline-flex items-center gap-2 text-lg font-medium tracking-wide text-slate-800 transition hover:opacity-75 active:opacity-100"
            >
              <svg
                className="hi-mini hi-cursor-arrow-ripple inline-block size-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.111 11.89A5.5 5.5 0 1115.501 8 .75.75 0 1017 8a7 7 0 10-11.95 4.95.75.75 0 001.06-1.06zm2.121-5.658a2.5 2.5 0 000 3.536.75.75 0 11-1.06 1.06A4 4 0 1114 8a.75.75 0 01-1.5 0 2.5 2.5 0 00-4.268-1.768zm2.534 1.279a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* END Brand */}
          </div>
          {/* END Middle Section */}
          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Settings */}
            <a
              href="javascript:void(0)"
              className="inline-flex items-center justify-center rounded-lg border-slate-100 bg-slate-100 px-2.5 py-2 leading-6 font-semibold text-slate-800 hover:border-slate-200 hover:bg-slate-200 hover:text-slate-800 focus:ring-3 focus:ring-indigo-500/25 focus:outline-hidden active:border-slate-100 active:bg-slate-100"
            >
              <svg
                className="hi-mini hi-cog-6-tooth inline-block size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* END Toggle Sidebar on Mobile */}
          </div>
          {/* END Right Section */}
        </div>
      </header>
  )
}

export default AdminHeader
