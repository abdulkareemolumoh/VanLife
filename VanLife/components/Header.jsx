import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "blue",
  };

  const notActiveStyle = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
  };

  return (
    <header className="container-fluid ">
      <div className="row fw-bold fs-5 ">
        <div className="col-5 text-start fs-2  ">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            #VANLIFE
          </NavLink>
        </div>
        <div className="col ">
          <NavLink
            to="host"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Host
          </NavLink>
        </div>
        <div className="col ">
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            About
          </NavLink>
        </div>
        <div className="col ">
          <NavLink
            to="vans"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Vans
          </NavLink>
        </div>
      </div>
    </header>
  );
}
