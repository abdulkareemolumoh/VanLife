import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path">
        &larr; Back to all vans
      </Link>
      <div>
        <img src={currentVan.imageUrl} />
        {currentVan.type}
        <h3>{currentVan.name}</h3>
        <h4>${currentVan.price}/day</h4>
      </div>
      <nav>
        <Link to=".">
          Details
        </Link>
        <Link to="pricing">Pricing</Link>
        <Link to="photo">Photos</Link>
      </nav>
      <Outlet context={{ currentVan }} />
    </section>
  );
}
