import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="container-fluid card">
      {van ? (
        <div>
          <img src={van.imageUrl} className="card-img-top" />
          <div className="card-body text-start ">
            <h2 className="card-text p-2">{van.name}</h2>
            <h2 className="card-text p-2">{van.type}</h2>
            <h2 className="card-text p-2">{van.price}/day</h2>
            <h2 className="card-text p-2">{van.description}</h2>
            <div className="d-grid gap-2 col-11 mx-auto pt-4 ">
              <button className="btn  btn-warning py-2">
                Rent this van
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
