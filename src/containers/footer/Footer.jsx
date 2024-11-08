import React from "react";
import gpt3Logo from "../../assets/GPT-3.svg";
import "./footer.css";

const Footer = () => {
  const footerData = [
    {
      title: "Links",
      items: ["Social Media", "Counters"],
    },
    {
      title: "Company",
      items: ["Terms & Conditions", "Privacy Policy"],
    },
    {
      title: "Get in touch",
      items: ["085-132567", "info@payme.net"],
    },
  ];
  return (
    <div className="footer-container section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
        </div>
        {footerData.map((section, index) => (
          <div className="footer-links_div" key={index}>
            <h4>{section.title}</h4>
            {section.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
