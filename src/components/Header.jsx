import React from "react";
import { Link } from "react-router";
import { useAuth } from "../contexts/auth/AuthContext";
import { useContext } from "react";
import { themeContext } from "../contexts/theme/themeContext";

export default function Header({ title }) {
  const { theme, toggleTheme } = useContext(themeContext);
  const { user, logout } = useAuth();
  console.log(user)
  return (
    <header className={`flex justify-between p-5 px-20 ${theme.style}`}>
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold">{title}</h1>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded hover:bg-gray-300 transition"
        >
          {theme.mode === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <ul className="flex gap-5">
        <li><Link to="/minitask1">Counter</Link></li>
        <li><Link to="/minitask2">Product</Link></li>
        <li><Link to="/minitask3">Rick & Morty</Link></li>
        <li><Link to="/formsurvey">Form Survey</Link></li>
      </ul>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <p>Welcome, {user.username}</p>
            <button
              onClick={logout}
              className="px-3 py-1 bg-red-500 text-white rounded">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="px-3 py-1 bg-blue-500 text-white rounded">
            Login
          </Link>
        )}
        <Link to="/" className="font-bold">Home</Link>
      </div>
    </header>
  );
}
