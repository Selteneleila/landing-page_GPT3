import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="feature-container">
      <div className="feature-container-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="feature-container-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
