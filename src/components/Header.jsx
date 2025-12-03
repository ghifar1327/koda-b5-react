import React from "react";
import { Link } from "react-router";

export default function Header({ title }) {
  return (
    <header className="flex justify-between p-5 px-20">
      <h1>{title}</h1>
      <ul className="flex gap-5">
        <li>
          <Link to="/minitask1">Minitask 1</Link>
        </li>
        <li>
          <Link to="/minitask2">Minitask 2</Link>
        </li>
        <li>
          <Link to="/minitask3">Minitask 3</Link>
        </li>
      </ul>
      <p>
        <Link to="/">Home</Link>
      </p>
    </header>
  );
}
