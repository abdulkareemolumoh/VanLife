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
    <Link to={`/host/vans/${van.id}`} key={van.id}>
      <img src={van.imageUrl} />
      <h2>{van.type}</h2>
      <h3>{van.name}</h3>
      <p>${van.price}/day</p>
    </Link>
  ));
  return (
    <div>
      <h1>Your listed vans</h1>
      {hostVansElements}
    </div>
  );
}
