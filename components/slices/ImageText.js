const ImageText = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center mt-32 mb-32 md:mt-64 md:mb-64">
      <div className="flex flex-col-reverse sm:flex-row items-center">
        <div className="md:w-1/2 pt-10 sm:pt-0 sm:pr-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
          <img
            className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={slice.primary.section_image.url}
            alt={slice.primary.section_image.alt}
          />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="text-4xl md:text-6xl text-gray-900 font-bold tracking-tighter leading-tight">
            {slice.primary.section_title[0].text}
          </h1>
          <h4 className="mt-3 text-base text-xl md:text-3xl text-gray-900">
            {slice.primary.section_description[0].text}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
