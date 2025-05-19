import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CiLight ,CiDark } from "react-icons/ci";

function ThemeSwitcher({ className = "" }) {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const toggleTheme=()=>{
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <><div className={className}>
      {theme === "light" ? (
        <CiLight onClick={toggleTheme} size={24} className="cursor-pointer" />
      ) : (
        <CiDark onClick={toggleTheme} size={24} className="cursor-pointer" />
      )}
    </div>
   </>
  );
}

export default ThemeSwitcher;
