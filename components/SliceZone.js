import React from "react";
import { BlogPostPreviews } from "./slices";
import { HeroMain } from "./slices";
import { HeroPlain } from "./slices";
import { ImageText } from "./slices";
import { Signup } from "./slices";
import { Text } from "./slices";
import { TextImage } from "./slices";
import { TextImageCenter } from "./slices";
import { ThreeColumns } from "./slices";

const SliceZone = ({ sliceZone }) => {
  return (
    <>
      {sliceZone.map((slice, index) => {
        switch (slice.type) {
          case "text___image":
            return <TextImage slice={slice} key={`slice-${index}`} />;
          case "main_hero":
            return <HeroMain slice={slice} key={`slice-${index}`} />;
          case "signup":
            return <Signup slice={slice} key={`slice-${index}`} />;
          case "image___text":
            return <ImageText slice={slice} key={`slice-${index}`} />;
          case "plain_hero":
            return <HeroPlain slice={slice} key={`slice-${index}`} />;
          case "text":
            return <Text slice={slice} key={`slice-${index}`} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default SliceZone;
