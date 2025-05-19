import { Component } from "react";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Service from "../pages/Service/Service";
import Product from "../pages/Product/Product";
import SignIn from "../pages/SignIn/SignIn";
import AdminLayout from "../components/layout/AdminLayout";
import DashBoard from "../pages/Admin/DashBoard";
import Products from "../pages/Admin/Products";
import Users from "../pages/Admin/Users";
import ProductDetails from "../pages/Product/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/CheckOut/Checkout";
import NotFound from "../components/common/NotFound";
import Accordian from "../pages/Admin/Accordion/Accordian";


export const routeConfig = [
    {
        Component: Layout,
        children:[
            {
                path: "/",
                errorElement: <NotFound/>,
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/service",
                element: <Service/>
            },
            {
                path: "/products",
                element: <Product/>
            },
            {
                path: "/products/:productID",
                element: <ProductDetails/>
            },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path:"/checkout",
                element: <Checkout/>
            }
        ]
    },
    {
        path: "/signin",
        element: <SignIn/>,
    },
    {
        path: "/admin",
        errorElement: <NotFound/>,
        Component: AdminLayout,
        children:[
            {path: "dashboard", element: <DashBoard/>},
            {path: "products", element: <Products/>},
            {path: "users", element: <Users/>},
            {path: "accordion", element: <Accordian/>},
        ]
    },
    {
        path: "*",
        element: <NotFound/>,
    }
]