import React from 'react'
import { useApiCall } from '../../hooks/useApiCall';
import { fetchProductAxios } from '../../services/productService';
import { fetchUserAxios } from '../../services/userService';
import Loader from '../../components/common/Loader';

function DashBoard() {

  const { data: productData } = useApiCall(fetchProductAxios);
  const { data: userData } = useApiCall(fetchUserAxios);


  if (!productData || !productData.products || !userData) {
  return <div><Loader/></div>;
}
  
  return (
    <main
        id="page-content"
        className="flex max-w-full flex-auto flex-col pt-20"
      >
        {/* Page Section */}
        <div className="container mx-auto space-y-10 px-4 py-8 lg:space-y-16 lg:px-8 lg:py-12 xl:max-w-7xl">
          {/* Quick Stats */}
          <div>
            <h2 className="mb-1 text-2xl font-semibold">Quick Stats</h2>
            <h3 className="mb-8 text-sm font-medium text-slate-600">
              Welcome , everything looks great.
            </h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4">
              {/* New Leads Card */}
              <a
                href="javascript:void(0)"
                className="group flex flex-col overflow-hidden rounded-2xl bg-pink-50 transition hover:bg-pink-100 active:bg-pink-50"
              >
                <div className="flex grow items-center justify-between p-6">
                  <dl>
                    <dt className="text-2xl font-bold text-pink-600">{userData.length}</dt>
                    <dd className="text-sm font-medium text-pink-900">
                      Users
                    </dd>
                  </dl>
                  <svg
                    className="hi-mini hi-arrow-uturn-up inline-block size-10 text-pink-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.768 7.793a.75.75 0 01-1.06-.025L12.75 3.622v10.003a5.375 5.375 0 01-10.75 0V10.75a.75.75 0 011.5 0v2.875a3.875 3.875 0 007.75 0V3.622L7.293 7.768a.75.75 0 01-1.086-1.036l5.25-5.5a.75.75 0 011.085 0l5.25 5.5a.75.75 0 01-.024 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
              
              <a
                href="javascript:void(0)"
                className="group flex flex-col overflow-hidden rounded-2xl bg-sky-50 transition hover:bg-sky-100 active:bg-sky-50"
              >
                <div className="flex grow items-center justify-between p-6">
                  <dl>
                    <dt className="text-2xl font-bold text-sky-600">{productData.products.length}</dt>
                    <dd className="text-sm font-medium text-sky-900">
                      Products
                    </dd>
                  </dl>
                  <svg
                    className="hi-mini hi-briefcase inline-block size-10 text-sky-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                      clipRule="evenodd"
                    />
                    <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                  </svg>
                </div>
              </a>
              {/* END Projects Card */}
              {/* Tickets Card */}
              <a
                href="javascript:void(0)"
                className="group flex flex-col overflow-hidden rounded-2xl bg-purple-50 transition hover:bg-purple-100 active:bg-purple-50"
              >
                <div className="flex grow items-center justify-between p-6">
                  <dl>
                    <dt className="text-2xl font-bold text-purple-600">6</dt>
                    <dd className="text-sm font-medium text-purple-900">
                      Tickets
                    </dd>
                  </dl>
                  <svg
                    className="hi-mini hi-lifebuoy inline-block size-10 text-purple-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.171 4.146l1.947 2.466a3.514 3.514 0 011.764 0l1.947-2.466a6.52 6.52 0 00-5.658 0zm8.683 3.025l-2.466 1.947c.15.578.15 1.186 0 1.764l2.466 1.947a6.52 6.52 0 000-5.658zm-3.025 8.683l-1.947-2.466c-.578.15-1.186.15-1.764 0l-1.947 2.466a6.52 6.52 0 005.658 0zM4.146 12.83l2.466-1.947a3.514 3.514 0 010-1.764L4.146 7.171a6.52 6.52 0 000 5.658zM5.63 3.297a8.01 8.01 0 018.738 0 8.031 8.031 0 012.334 2.334 8.01 8.01 0 010 8.738 8.033 8.033 0 01-2.334 2.334 8.01 8.01 0 01-8.738 0 8.032 8.032 0 01-2.334-2.334 8.01 8.01 0 010-8.738A8.03 8.03 0 015.63 3.297zm5.198 4.882a2.008 2.008 0 00-2.243.407 1.994 1.994 0 00-.407 2.243 1.993 1.993 0 00.992.992 2.008 2.008 0 002.243-.407c.176-.175.31-.374.407-.585a2.008 2.008 0 00-.407-2.243 1.993 1.993 0 00-.585-.407z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
              {/* END Tickets Card */}
              {/* Customers Card */}
              <a
                href="javascript:void(0)"
                className="group flex flex-col overflow-hidden rounded-2xl bg-orange-50 transition hover:bg-orange-100 active:bg-orange-50"
              >
                <div className="flex grow items-center justify-between p-6">
                  <dl>
                    <dt className="text-2xl font-bold text-orange-600">5</dt>
                    <dd className="text-sm font-medium text-orange-900">
                      Customers
                    </dd>
                  </dl>
                  <svg
                    className="hi-mini hi-user-group inline-block size-10 text-orange-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                  </svg>
                </div>
              </a>
              {/* END Customers Card */}

              {/* END Sales Card */}
              
            </div>
          </div>
          {/* END Quick Stats */}
          
         
        </div>
        {/* END Page Section */}
      </main>
  )
}

export default DashBoard
