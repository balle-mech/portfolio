const HeroSection = () => {
  return (
    <div
      id="home"
      className="container mx-auto mt-16 flex w-full items-center justify-between px-8 md:px-5 lg:px-15"
    >
      <div className="flex flex-wrap items-center md:flex-nowrap">
        <div className="flex max-w-sm flex-wrap justify-center md:my-36 md:justify-start lg:ml-20">
          <h1 className="text-center text-4xl font-bold md:text-left md:text-5xl lg:text-6xl">
            Atsushi Fukunaga <br />
          </h1>
        </div>
        <img
          src="/images/bread.png"
          alt="top image"
          className="right-6 -z-10 mx-auto mt-12 w-1/4 md:absolute md:mt-0 lg:w-1/3"
        />
      </div>
    </div>
  );
};

export default HeroSection;
