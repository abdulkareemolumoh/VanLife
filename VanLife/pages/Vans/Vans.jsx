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
    <div>
      <Link to={`${van.id}`}>
        <img className="van-img" src={van.imageUrl} />
        <div className="van-name-price">
          <h3>{van.name}</h3>
          <h3>
            ${van.price}
            <br />
            /day
          </h3>
        </div>
        <h3 className={`van-type ${van.type}`}>{van.type}</h3>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1>Explore our van options</h1>
      <div className="van-element-cta">{vansElement}</div>
    </div>
  );
}
