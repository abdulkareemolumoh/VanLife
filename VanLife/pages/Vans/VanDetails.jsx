import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetails() {
  const van = useLoaderData();

  return (
    <div className="container-fluid card">
      <Link to=".." relative="path">
        &larr; Back to all vans
      </Link>

      <div>
        <img src={van.imageUrl} className="card-img-top" />
        <div className="card-body text-start ">
          <h2 className="card-text p-2">{van.name}</h2>
          <h2 className="card-text p-2">{van.type}</h2>
          <h2 className="card-text p-2">{van.price}/day</h2>
          <h2 className="card-text p-2">{van.description}</h2>
          <div className="d-grid gap-2 col-11 mx-auto pt-4 ">
            <button className="btn  btn-warning py-2">Rent this van</button>
          </div>
        </div>
      </div>
    </div>
  );
}
