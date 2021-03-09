import React from "react";
import { RichText } from "prismic-reactjs";

const HeroMain = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex flex-col items-center mt-32 mb-32">
      <div className="pr-20">
        <h1 className="text-8xl text-gray-900 font-bold tracking-tight leading-tight ">
          {slice.primary.sectionTitle[0].text}
        </h1>
        <h4 className="text-3xl mt-3 text-gray-900 ">
          {slice.primary.sectionDescription[0].text}
        </h4>
        <div className="">
          <div className="flex flex-row mt-10 rounded-md">
            <button className="uppercase font-bold bg-black flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5">
              Kostenlos Testen
            </button>
            <button className="ml-5 uppercase font-bold  flex items-center justify-center px-8 py-3 border border-solid border-black text-base leading-6 font-medium rounded-md text-black transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5">
              Funktionen
            </button>
            <button className="ml-5 uppercase font-bold  flex items-center justify-center px-8 py-3 border border-solid border-black text-base leading-6 font-medium rounded-md text-black transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5">
              Demo
            </button>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div className="">
          <img className="" src="./images/mateoflows1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
