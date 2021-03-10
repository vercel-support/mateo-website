import { RichText } from "prismic-reactjs";

const ImageText = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center mt-32 mb-64">
      <div className="text-base md:text-2xl text-gray-900 prose md:prose-xl">
        <RichText render={slice.primary.section_description} />
      </div>
    </section>
  );
};

export default ImageText;
