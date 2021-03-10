import React from "react";
import { RichText } from "prismic-reactjs";

const Signup = ({ slice }) => {
  return (
    <section
      id="signup"
      className="container mx-auto px-5 flex-col items-center mt-32 mb-32"
    >
      <div
        className="rounded-lg pt-20 pb-20 pl-5 pr-5 md:p-20"
        style={{
          backgroundImage: "url(" + "./images/risingsun.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
              Jetzt kostenlos starten und automatisieren
            </h1>
          </div>
          <form className="flex-grow w-full md:pl-20">
            <div className="mt-10 md:mt-5">
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Ihre E-Mail Adresse"
                  className="p-5 rounded-t-md rounded-b-none md:rounded-l-md md:rounded-r-none bg-transparent text-white border-4 border-white placeholder-white border-solid flex-grow"
                ></input>

                <button
                  type="submit"
                  className="p-5 uppercase font-bold bg-white text-black border-white rounded-b-md rounded-t-none md:rounded-r-md md:rounded-l-none"
                >
                  Jetzt loslegen
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
