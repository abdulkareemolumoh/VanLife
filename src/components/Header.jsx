import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <NavLink to="/">#VANLIFE</NavLink>
      </div>
      <nav className="app-nav">
        <NavLink to="/host" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Host
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          About
        </NavLink>
        <NavLink to="/vans" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
