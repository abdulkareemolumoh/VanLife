import { Link, useSearchParams, useLoaderData } from "react-router-dom";

const FILTER_TYPES = ["simple", "rugged", "luxury"];

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElement = displayedVans.map((van) => (
    <div className="col-md-6" key={van.id}>
      <Link
        to={`${van.id}`}
        className="van-card text-decoration-none text-black"
      >
        <img src={van.imageUrl} alt={van.name} />
        <div>
          <p className="van-title">{van.name}</p>
          <p className="van-price">${van.price}/day</p>
        </div>
        <p className={`van-type ${van.type}`}>{van.type}</p>
      </Link>
    </div>
  ));

  function genUrl(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  function buttonGenUrl(key, value) {
    setSearchParams((prevParams) => {
      const sp = new URLSearchParams(prevParams);
      if (value === null) {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
      return sp;
    });
  }

  return (
    <section className="page-section">
      <div className="section-title">Explore our van options</div>
      <div className="filter-bar">
        {FILTER_TYPES.map((type) => (
          <Link
            key={type}
            to={genUrl("type", type)}
            className={`chip ${type} ${typeFilter === type ? "active" : ""}`}
          >
            {type[0].toUpperCase() + type.slice(1)}
          </Link>
        ))}

        {typeFilter ? (
          <button type="button" className="clear-chip" onClick={() => buttonGenUrl("type", null)}>
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="row gy-4">{vansElement}</div>
    </section>
  );
}
