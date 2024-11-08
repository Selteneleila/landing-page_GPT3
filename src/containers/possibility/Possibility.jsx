import React from "react";
import featureImg from "../../assets/Feature Image.png";
import "./possibility.css";

const Possibility = () => (
  <div className="possibility-container section__padding" id="possibility">
    <div className="possibility-image">
      <img src={featureImg} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Discover endless opportunities for growth, innovation, and exploration.
        Embrace new adventures and the excitement that comes with each
        breakthrough. Unlock your potential and step into a future filled with
        endless possibilities and joy.
      </p>
    </div>
  </div>
);

export default Possibility;
