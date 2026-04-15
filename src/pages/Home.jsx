import { Link } from "react-router-dom";
import homeImage from "/src/assets/home_image.png";

export default function Home() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="hero-content">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <h3>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h3>
        <Link to="vans" className="btn btn-primary">
          Find your van
        </Link>
      </div>
    </section>
  );
}
