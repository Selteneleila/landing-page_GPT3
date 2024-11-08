import React from "react";
import "./article.css";

const Article = ({ imgUrl, imgAlt, date, text }) => {
  return (
    <div className="article-container">
      <div className="article-container-image">
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className="article-container-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
