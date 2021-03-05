import React from "react";
import { TextImage } from "./slices";

const SliceZone = ({ sliceZone }) => {
  console.log(sliceZone);
  return (
    <div className="container">
      {sliceZone.map((slice, index) => {
        console.log(slice.type);
        switch (slice.type) {
          case "text___image":
            return <TextImage slice={slice} key={`slice-${index}`} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SliceZone;
