import { RichText } from "prismic-reactjs";

const ImageText = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center mt-32 mb-64">
      <div className="flex flex-col-reverse sm:flex-row items-center">
        <div>
          <h4 className="mt-3 text-base text-3xl text-gray-900 prose lg:prose-xl">
            <RichText render={slice.primary.section_description} />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
