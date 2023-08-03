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

  function genUrl(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  function buttonGenUrl(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div>
      <h1>Explore our van options</h1>
      <div>
        <Link to={genUrl("type", "simple")}>Simple</Link>
        <Link to={genUrl("type", "rugged")}>Rugged</Link>
        <Link to={genUrl("type", "luxury")}>Luxury</Link>
        {typeFilter ? (
          <Link to={genUrl("type", null)}>Clear Filters</Link>
        ) : null}
      </div>
      <div>
        <button onClick={() => buttonGenUrl("type", "simple")}>Simple</button>
        <button onClick={() => buttonGenUrl("type", "rugged")}>Rugged</button>
        <button onClick={() => buttonGenUrl("type", "luxury")}>Luxury</button>
        {typeFilter ? (
          <button onClick={() => buttonGenUrl("type", null)}>
            Clear Filters
          </button>
        ) : null}
      </div>
      <div className="row ">{vansElement}</div>
    </div>
  );
}
