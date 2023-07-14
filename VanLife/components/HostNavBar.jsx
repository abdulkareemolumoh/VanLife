import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostNavBar() {
  return (
    <div>
      <nav>
        <NavLink to="." end>
          {/* to="/host" */}
          Dashboard
        </NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
