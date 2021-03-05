import React from "react";
import { RichText } from "prismic-reactjs";

const TextImage = ({ slice }) => {
  console.log(slice);
  return (
    <section className="">
      <div className="">{slice.primary.sectionTitle.text}</div>
    </section>
  );
};

export default TextImage;
