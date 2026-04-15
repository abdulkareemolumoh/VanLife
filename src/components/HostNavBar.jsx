import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostNavBar() {
  return (
    <div className="page-section">
      <nav className="host-nav">
        <NavLink end to="." className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Dashboard
        </NavLink>
        <NavLink to="income" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Income
        </NavLink>
        <NavLink to="vans" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Vans
        </NavLink>
        <NavLink to="reviews" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
