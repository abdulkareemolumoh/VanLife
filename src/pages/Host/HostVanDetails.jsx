import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function HostVanDetails() {
  const currentVan = useLoaderData();

  return (
    <section className="page-section host-van-details">
      <Link to=".." relative="path" className="btn btn-ghost">
        &larr; Back to all vans
      </Link>
      <div className="host-van-card card-panel">
        <img src={currentVan.imageUrl} alt={currentVan.name} />
        <div>
          <p className={`van-type ${currentVan.type}`}>{currentVan.type}</p>
          <h2>{currentVan.name}</h2>
          <p className="van-price">${currentVan.price}/day</p>
        </div>
      </div>
      <nav className="detail-nav">
        <Link to="." end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Details
        </Link>
        <Link to="pricing" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Pricing
        </Link>
        <Link to="photo" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Photos
        </Link>
      </nav>
      <Outlet context={{ currentVan }} />
    </section>
  );
}
