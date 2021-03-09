import React from "react";
import { RichText } from "prismic-reactjs";
import Layout from "../layout";

const ThreeColumns = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center mt-32 mb-32">
      <div className="flex flex-col sm:flex-row items-center">
        <div>
          <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
            Darum MATEO
          </h1>
          <h4 className="mt-3 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-3 md:text-3xl lg:mx-0">
            Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben
          </h4>
        </div>
      </div>
      <div className="flex flex-row mt-10">
        <div className="flex-grow w-1/3 pr-10">
          <div>
            <img src="./images/menu.svg" width={50} />
          </div>
          <div className="text-3xl mt-5">Value 1</div>
          <div className="text-xl">
            Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben
            Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben
          </div>
        </div>
        <div className="flex-grow w-1/3 pr-10">
          <div>
            <img src="./images/menu.svg" width={50} />
          </div>
          <div className="text-3xl mt-5">Value 1</div>
          <div className="text-xl">
            Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben
            Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben
          </div>
        </div>
        <div className="flex-grow w-1/3 pr-10">
          <div>
            <img src="./images/menu.svg" width={50} />
          </div>
          <div className="text-3xl mt-5">Value 1</div>
          <div className="text-xl">
            Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben
            Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumns;
