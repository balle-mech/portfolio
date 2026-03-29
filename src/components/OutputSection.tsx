const OutputSection = () => {
  return (
    <div
      id="output"
      className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-5 lg:px-15"
    >
      <section className="w-full">
        <h2 className="secondary-title">私のアウトプット</h2>
        <p className="section-paragraph">私のアウトプットはこちら</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <img
            src="./images/portfolio1.jpg"
            alt=""
            className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
          />
          <img
            src="./images/portfolio2.jpg"
            alt=""
            className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
          />
          <img
            src="./images/portfolio3.jpg"
            alt=""
            className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
          />
          <img
            src="./images/portfolio4.jpg"
            alt=""
            className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
          />
          <img
            src="./images/portfolio5.jpg"
            alt=""
            className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
          />
          <img
            src="./images/portfolio6.jpg"
            alt=""
            className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
          />
        </div>
      </section>
    </div>
  );
};

export default OutputSection;
