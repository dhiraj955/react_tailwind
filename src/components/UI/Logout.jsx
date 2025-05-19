import React from 'react'
import { useNavigate } from 'react-router'

function Logout() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleLogout} className="bg-red-500 text-white hover:bg-red-700 px-6 py-2 rounded-md">Logout</button>
    </div>
  )
}

export default Logout
