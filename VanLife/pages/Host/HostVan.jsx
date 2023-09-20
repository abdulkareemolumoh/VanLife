import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader() {
  return getHostVans();
}

export default function HostVan() {
  const vans = useLoaderData();

  const hostVansElements = vans.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id} className="van-container">
      <img src={van.imageUrl} className="van-image" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1 className="Host-heading">Your listed vans</h1>
      {hostVansElements}
    </div>
  );
}
