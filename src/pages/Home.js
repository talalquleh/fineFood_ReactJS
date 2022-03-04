import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Welcoming1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Fine Food </h1>
        <p color="white">FINE FOOD And a true gastronomic experience </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
