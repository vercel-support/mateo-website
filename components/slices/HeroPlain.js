const HeroPlain = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex flex-col items-start mt-32 mb-32">
      <h1 className="text-8xl text-gray-900 font-bold tracking-tight leading-tight ">
        {slice.primary.section_title[0].text}
      </h1>
    </section>
  );
};

export default HeroPlain;
