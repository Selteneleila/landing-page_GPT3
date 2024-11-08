import React from "react";
import people from "../../assets/Group 81.png";
import ai from "../../assets/Header Illustration.png";
import "./header.css";

const Header = () => (
  <div className="header-container section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">
        Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Your trusted partner in discovery and growth. Embrace a world where
        thoughtful AI empowers you, supports your journey, and brings joyful
        innovation to every step
      </p>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="header-content__people">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
