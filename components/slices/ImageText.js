const ImageText = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center mt-64 mb-64">
      <div className="flex flex-col-reverse sm:flex-row items-center">
        <div className="pt-10 sm:pt-0 sm:pr-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
          <img
            className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={slice.primary.section_image.url}
            alt={slice.primary.section_image.alt}
          />
        </div>
        <div>
          <h1 className="text-6xl font-bold tracking-tighter leading-tight text-gray-900">
            {slice.primary.section_title[0].text}
          </h1>
          <h4 className="mt-3 text-base text-3xl text-gray-900">
            {slice.primary.section_description[0].text}
          </h4>
          <div className="text-3xl mt-3  flex flex-row items-start font-bold">
            <div>Erfahre Mehr</div>
            <img className="mt-1" width="40px;" src="./images/arrowright.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
