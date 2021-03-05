import React from "react";
import { RichText } from "prismic-reactjs";

const LeftImageRightText = ({ slice }) => {
  return (
    <section className="">
      <div className="">{RichText.render(slice.primary.text || [])}</div>
    </section>
  );
};

export default LeftImageRightText;
