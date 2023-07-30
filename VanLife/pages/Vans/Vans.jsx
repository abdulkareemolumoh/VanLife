import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const dispalyedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElement = dispalyedVans.map((van) => (
    <div className="col-md-6">
      <div className="container">
        <Link
          to={`${van.id}`}
          className="text-decoration-none text-start text-black"
        >
          <img src={van.imageUrl} className="img-fluid rounded-3" />
          <div className="pt-4">
            <p className="fs-3 fw-bold ">{van.name}</p>
            <p>${van.price}/day</p>
          </div>
          <p className={`van-type ${van.type}`}>{van.type}</p>
        </Link>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Explore our van options</h1>
      <div>
        <Link to="?type=simple">Simple</Link>
        <Link to="?type=rugged">Rugged</Link>
        <Link to="?type=luxury">Luxury</Link>
        <Link to=".">Clear Filters</Link>
      </div>
      <div>
        <button onClick={() => setSearchParams({ type: "simple" })}>
          Simple
        </button>
        <button onClick={() => setSearchParams({ type: "rugged" })}>
          Rugged
        </button>
        <button onClick={() => setSearchParams({ type: "luxury" })}>
          Luxury
        </button>
        <button onClick={() => setSearchParams({})}>Clear Filters</button>
      </div>
      <div className="row ">{vansElement}</div>
    </div>
  );
}
