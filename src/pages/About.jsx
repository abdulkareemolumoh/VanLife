import { Link } from "react-router-dom";
import about_image from "/src/assets/about_image.png";

export default function About() {
  return (
    <div>
      <img src={about_image} className="about-img" />
      <div className="about-pg-container">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>Your destination is waiting. Your van is ready.</h2>
        <Link to="/vans" className="Explore-Btn">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
