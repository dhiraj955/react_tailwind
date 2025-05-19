import React, { useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router';

const SignIn = () => {
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }

    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        const matchedUser = data.find(
          (user) => user.username === username && user.password === password
        );
        if (matchedUser) {
          localStorage.setItem("token", matchedUser.username);
          navigate("/admin/dashboard");
        } else {
          alert("Wrong credentials");
        }
      });
  };

  if (isLoggedIn) {
    return <Navigate to={"/admin/dashboard"} />;
  }

  return (
    <div className="pt-24 min-h-screen flex justify-center items-start bg-gray-50">
      <div className="w-[350px] border border-gray-300 rounded-2xl shadow-md p-6 bg-white">
        <NavLink to={"/"} className="no-underline">
          <h1 className="text-center text-2xl font-bold text-blue-500 mb-6">Cartista</h1>
        </NavLink>
          <h1 className="text-center text-xl font-bold text-black mb-6">Login Here</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 text-lg"
          />
          <p className="text-sm text-blue-600 underline text-right">Forget Password?</p>
          <input
            type="submit"
            value="Login"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md cursor-pointer hover:opacity-80 transition"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
