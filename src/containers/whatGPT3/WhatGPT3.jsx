import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGTP3.css";

const WhatGTP3 = () => {
  return (
    <div className="whatgpt3 section__margin" id="wgpt3">
      <div className="whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3, or Generative Pre-trained Transformer 3, is an advanced language model developed by OpenAI. It’s capable of understanding and generating human-like text based on the context of the conversation."
        />
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatgpt3-container">
        <Feature
          title="Chatbots"
          text="GPT-3-powered chatbots bring conversations to life, responding intelligently to user inputs."
        />
        <Feature
          title="Knowledgebase"
          text="With GPT-3, knowledge bases become interactive and user-friendly. Users can ask questions in plain language, and GPT-3 provides concise, accurate answers."
        />
      </div>
    </div>
  );
};

export default WhatGTP3;
