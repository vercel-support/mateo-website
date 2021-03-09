import React from "react";
import { RichText } from "prismic-reactjs";

const Signup = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center ">
      <div
        className="rounded-lg p-20"
        style={{
          backgroundImage: "url(" + "./images/risingsun.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold tracking-tighter leading-tight text-white">
              Jetzt kostenlos starten und automatisieren
            </h1>
          </div>
          <div className="mt-5">
            <div className="flex flex-row">
              <input
                placeholder="Ihre E-Mail Adresse"
                className="p-5 rounded-l-md bg-transparent text-white border-4 border-white placeholder-white border-solid"
                style={{ width: 380 }}
              ></input>

              <button className="p-5 uppercase font-bold bg-white text-black border-white rounded-r-md">
                Jetzt loslegen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
