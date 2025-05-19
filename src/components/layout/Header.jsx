import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import Logout from "../UI/Logout";
import ThemeSwitcher from "../UI/ThemeSwitcher";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const{cartData} = useContext(CartContext);
  const isLoggedIn = !!localStorage.getItem("token")
  // const [searchParams] = useSearchParams();
  // const count = parseInt(searchParams.get("count")) || 0;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerwidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);
  return (
    <header className="bg-gray-800 text-white fixed w-full mt-0">
      <div className="max-w-[1280px] mx-auto p-4 flex items-center justify-between">
        <NavLink to={"/"} className="text-2xl font-bold z-20">Cartista</NavLink>
        <div className="flex items-center gap-5 md:hidden">
          <div className="relative text-2xl">
            <NavLink to={"/cart"}><FaCartPlus /></NavLink>
            {cartData.length > 0 && (
              <p className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartData.length}
              </p>
            )}
          </div>
          {isLoggedIn ? (
            <Logout/>
          ) : (
            <NavLink to={"/signin"}>
              <button className="bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded-md">
                Sign In
              </button>
            </NavLink>
          )}
        </div>
        {!isOpen && (
          <div onClick={toggleMenu} className="cursor-pointer md:hidden">
            <HiMenuAlt2 size={30} />
          </div>
        )}
        {isOpen && (
          <div onClick={toggleMenu} className="cursor-pointer md:hidden z-20">
            <IoClose size={30} />
          </div>
        )}
        {isOpen ? (
          <div className="bg-gray-800 overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen flex justify-center items-center flex-col gap-15 duration-300 ease-in">
            <NavLink className="text-[18px] font-medium" to={"/"}>
              Home
            </NavLink>
            <NavLink className="text-[18px] font-medium" to={"/about"}>
              About
            </NavLink>
            <NavLink className="text-[18px] font-medium" to={"/contact"}>
              Contact
            </NavLink>
            <NavLink className="text-[18px] font-medium" to={"/service"}>
              Service
            </NavLink>
            <NavLink className="text-[18px] font-medium" to={"/products"}>
              Product
            </NavLink>
             <ThemeSwitcher/>
          </div>
        ) : (
          <div className="bg-gray-800 overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen flex justify-center items-center flex-col gap-15 duration-300 ease-in"></div>
        )}
        <div className=" items-center gap-4 hidden md:flex">
          <NavLink className="text-[18px] font-medium" to={"/"}>
            Home
          </NavLink>
          <NavLink className="text-[18px] font-medium" to={"/about"}>
            About
          </NavLink>
          <NavLink className="text-[18px] font-medium" to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className="text-[18px] font-medium" to={"/service"}>
            Services
          </NavLink>
          <NavLink className="text-[18px] font-medium" to={"/products"}>
            Product
          </NavLink>
        </div>
         <ThemeSwitcher className="hidden md:block"/>
          

        <div className=" items-center gap-4 hidden md:flex">
          <div className="relative text-2xl">
            
            <NavLink to={"/cart"}><FaCartPlus /></NavLink>
            {cartData.length > 0 && (
              <p className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartData.length}
              </p>
            )}
          </div>
          {isLoggedIn ? (
            <Logout/>
          ) : (
            <NavLink to={"/signin"}>
              <button className="bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded-md">
                Sign In
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
