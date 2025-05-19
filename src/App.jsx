
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { routeConfig } from './routes/routeConfig'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { CartContext } from './context/CartContext'
import { ThemeContext } from './context/ThemeContext'
const router = createBrowserRouter(routeConfig);

const getInitialTheme = () => {
  return localStorage.getItem("theme") || "light";
}

function App() {

  const[cartData, setCartData] = useState([]);
  const[theme, setTheme] = useState(getInitialTheme);

  useEffect(()=>{
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme)
  },[theme])


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      
      

    <CartContext.Provider value={{cartData, setCartData}} >
    <RouterProvider router={router}/>
    <ToastContainer />
    </CartContext.Provider>
      
    </ThemeContext.Provider>
  )
}

export default App
