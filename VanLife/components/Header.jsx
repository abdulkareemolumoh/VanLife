import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>
      <nav className="Nav-Items">
        <NavLink to="host">Host</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="vans">Vans</NavLink>
      </nav>
    </header>
  );
}
