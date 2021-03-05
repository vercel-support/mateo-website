import React from "react";
import { TextImage } from "./slices";

const SliceZone = ({ sliceZone }) => {
  return (
    <div className="container">
      {sliceZone.map((slice, index) => {
        switch (slice.slice_type) {
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
