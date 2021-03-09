const TextImageCenter = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center mt-64 mb-64">
      <h1 className="text-7xl font-bold tracking-tighter leading-tight text-center text-gray-900">
        {slice.primary.section_title[0].text}
      </h1>
      <h4 className="text-3xl text-gray-900 text-center">
        {slice.primary.section_description[0].text}
      </h4>
      {slice.primary.section_image && (
        <div className=" pt-10 sm:pt-0 sm:pl-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
          <img
            className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="./images/mateohome1.png"
            alt=""
          />
        </div>
      )}
    </section>
  );
};

export default TextImageCenter;
