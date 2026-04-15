import { Link, useLoaderData } from "react-router-dom";

export default function HostVan() {
  const vans = useLoaderData();

  const hostVansElements = vans.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id} className="host-van-card text-decoration-none text-dark">
      <img src={van.imageUrl} alt={van.name} />
      <div>
        <h3>{van.name}</h3>
        <p className="van-price">${van.price}/day</p>
      </div>
    </Link>
  ));

  return (
    <section className="page-section">
      <h1 className="section-title">Your listed vans</h1>
      <div className="host-van-list">{hostVansElements}</div>
    </section>
  );
}
