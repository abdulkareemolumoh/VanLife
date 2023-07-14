import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostNavBar() {
  return (
    <div>
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <NavLink to="." end class="nav-link text-black bg-white">
            Dashboard
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="income" class="nav-link text-black bg-white">
            Income
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="vans" class="nav-link text-black bg-white">
            Vans
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="reviews" class="nav-link text-black bg-white">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
