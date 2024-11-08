import React from "react";
import blog1Img from "../../assets/Rectangle 22.png";
import blog2Img from "../../assets/Rectangle 22-1.png";
import blog3Img from "../../assets/Rectangle 22-2.png";
import blog4Img from "../../assets/Rectangle 22-3.png";
import blog5Img from "../../assets/Rectangle 22-4.png";
import Article from "../../components/article/Article";
import "./blog.css";

const blogData = [
  {
    imgUrl: blog1Img,
    imgAlt: "blog 1",
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
  {
    imgUrl: blog2Img,
    imgAlt: "blog 3",
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
  {
    imgUrl: blog3Img,
    imgAlt: "blog 3",
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
  {
    imgUrl: blog4Img,
    imgAlt: "blog 4",
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
  {
    imgUrl: blog5Img,
    imgAlt: "blog 5",
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {blogData.length > 0 && (
            <Article
              imgUrl={blogData[0].imgUrl}
              imgAlt={blogData[0].imgAlt}
              date={blogData[0].date}
              text={blogData[0].text}
            />
          )}
        </div>

        <div className="gpt3__blog-container_groupB">
          {blogData.slice(1).map((blog, index) => (
            <Article
              key={index}
              imgUrl={blog.imgUrl}
              imgAlt={blog.imgAlt}
              date={blog.date}
              text={blog.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
