import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Instantly Enhance Trust",
    text: "With our solution, you can quickly build trust and confidence. This is key to fostering strong relationships and ensuring lasting partnerships.",
  },
  {
    title: "Activate Your Potential",
    text: "Unlock your full potential with our tools. Our approach ensures that you can stay engaged and empowered to achieve your goals.",
  },
  {
    title: "Effortless Communication",
    text: "Whether it's a quick message or a thoughtful discussion, we make it easy for you to connect and share ideas effectively.",
  },
  {
    title: "Innovate and Lead",
    text: "In today's fast-paced world, leadership requires innovation. Take charge and lead your team with cutting-edge tools and strategies.",
  },
];

const Features = () => (
  <div className="features-container section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="features-content">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
