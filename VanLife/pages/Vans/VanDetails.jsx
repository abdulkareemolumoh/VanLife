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
    <div>
      {van ? (
        <div>
          <img src={van.imageUrl} />
          <h2>{van.type}</h2>
          <h2>{van.name}</h2>
          <h2>{van.price}/day</h2>
          <h2>{van.description}</h2>
          <button>Rent this van</button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
