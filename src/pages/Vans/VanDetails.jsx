import { Link, useLoaderData } from "react-router-dom";

export default function VanDetails() {
  const van = useLoaderData();

  return (
    <section className="page-section">
      <Link to=".." relative="path" className="btn btn-ghost">
        &larr; Back to all vans
      </Link>
      <div className="van-detail-card card-panel">
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-detail-body">
          <p className={`van-type ${van.type}`}>{van.type}</p>
          <h2>{van.name}</h2>
          <p className="van-price">${van.price}/day</p>
          <p>{van.description}</p>
          <button type="button" className="btn btn-primary">
            Rent this van
          </button>
        </div>
      </div>
    </section>
  );
}
