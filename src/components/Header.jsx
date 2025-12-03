import React from "react";
import { Link } from "react-router";

/**
 * header component
 * @param {string} props.title the title of the header
 * @returns {JSX.Element}
 */

export default function Header({ title }) {
  return (
    <header className="flex justify-between p-5 px-20">
      <h1>{title}</h1>
      <ul className="flex gap-5">
        <li>
          <Link to="/minitask1">Couter Number</Link>
        </li>
        <li>
          <Link to="/minitask2">Data Product</Link>
        </li>
        <li>
          <Link to="/minitask3">Rick And Morty</Link>
        </li>
        <li>
          <Link to="/loginForm">Login form</Link>
        </li>
      </ul>
      <p>
        <Link to="/">Home</Link>
      </p>
    </header>
  );
}
