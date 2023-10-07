import { Link, Outlet, useLoaderData } from "react-router-dom";


export default function HostVanDetails() {
  const currentVan = useLoaderData();

  return (
    <section>
      <Link to=".." relative="path">
        &larr; Back to all vans
      </Link>
      <div className="van-container">
        <img src={currentVan.imageUrl} className="van-image" />
        <div className="van-info">
          <h2>{currentVan.type}</h2>
          <h3>{currentVan.name}</h3>
          <h4>${currentVan.price}/day</h4>
        </div>
      </div>
      <nav>
        <Link to=".">Details</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="photo">Photos</Link>
      </nav>
      <Outlet context={{ currentVan }} />
    </section>
  );
}
