import React, { useEffect, useState } from "react";
import { Link, useParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  // console.log(van);
  return (
    <div className="container-fluid card">
      <Link to=".." relative="path">
        &larr; Back to all vans
      </Link>
      {van ? (
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
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
