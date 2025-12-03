import React from "react";
import { Link } from "react-router";

/**
 * header component
 * @param {string} props.title the title of the header
 * @returns {JSX.Element}
 */

export default function Header({ title }) {
  return (
    <header className="flex justify-between p-5 px-20 bg-amber-800 text-amber-100 items-center mb-5">
      <h1 className="font-bold text-2xl">{title}</h1>
      <ul className="flex gap-5">
        <li className="hover:text-2xl 
         transition-all 
         duration-300 
         ease-in-out">
          <Link to="/minitask1">Couter Number</Link>
        </li>
        <li className="hover:text-2xl 
         transition-all 
         duration-300 
         ease-in-out">
          <Link to="/minitask2">Data Product</Link>
        </li>
        <li className="hover:text-2xl 
         transition-all 
         duration-300 
         ease-in-out">
          <Link to="/minitask3">Rick And Morty</Link>
        </li>
        <li
          className="hover:text-2xl 
         transition-all 
         duration-300 
         ease-in-out"
        >
          <Link to="/loginForm">Login form</Link>
        </li>
      </ul>
      <p className="font-bold text-2xl hover:text-3xl 
         transition-all 
         duration-300 
         ease-in-out">
        <Link to="/">Home</Link>
      </p>
    </header>
  );
}
