import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostNavBar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };

  const notActiveStyle = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
  };
  
  return (
    <div>
      <div className="container text-center">
        <div className="row fw-bold">
          <div className="col fs-5 ">
            <NavLink
              to="."
              end
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Dashboard
            </NavLink>
          </div>
          <div className="col fs-5 ">
            <NavLink
              to="income"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Income
            </NavLink>
          </div>
          <div className="col fs-5 ">
            <NavLink
              to="vans"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Vans
            </NavLink>
          </div>
          <div className="col fs-5 ">
            <NavLink
              to="reviews"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
