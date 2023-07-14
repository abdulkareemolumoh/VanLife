import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVan() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

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
