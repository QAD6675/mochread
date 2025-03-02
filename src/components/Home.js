import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Mochread</h1>
        <p className="hero-text">Dope Artist</p>
      </section>
      <section className="features">
        <div className="feature-card">
          <FontAwesomeIcon icon={faLaptopCode} className="feature-icon" />
          <h2>My Projects</h2>
          <p>Explore my works.</p>
          <Link to="/projects" className="feature-link">
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
