import React from "react";
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";
import "./brand.css";

const Brand = () => {
  const brandData = [
    { image: google, alt: "google" },
    { image: slack, alt: "slack" },
    { image: dropbox, alt: "dropbox" },
    { image: shopify, alt: "shopify" },
  ];
  return (
    <div className="brand-container">
      {brandData.map((brand, index) => (
        <div key={index}>
          <img src={brand.image} alt={brand.alt} />
        </div>
      ))}
    </div>
  );
};

export default Brand;
