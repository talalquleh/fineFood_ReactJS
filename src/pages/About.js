import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Fine Food has been proudly serving in Budapest and beyond since 2010.
          Since then, our mission has been to provide high-quality food for all
          those that wish to combine fun and enjoyable ambiance with skillful
          cooking into one extraordinary dining experience. Scroll down to learn
          more about us
        </p>
      </div>
    </div>
  );
}

export default About;
