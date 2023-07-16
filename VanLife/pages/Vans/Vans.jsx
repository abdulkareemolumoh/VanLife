import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElement = vans.map((van) => (
    <div className="col-md-6">
      <div className="container">
        <Link to={`${van.id}`}>
          <img src={van.imageUrl} className="img-fluid" />
          <div className="text-start ">
            <p className="text-decoration-none fs-3">{van.name}</p>
            <p className="text-decoration-none">${van.price}/day</p>
          </div>
          <p className={`van-type ${van.type}`}>{van.type}</p>
        </Link>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Explore our van options</h1>
      <div className="row">{vansElement}</div>
    </div>
  );
}
