const SOCIAL_LINKS = [
  {
    href: "https://x.com/ballemech",
    icon: "fa-brands fa-x-twitter",
    label: "X (Twitter)",
    color: "",
  },
  {
    href: "https://www.linkedin.com/in/%E6%95%A6%E5%8F%B2-%E7%A6%8F%E6%B0%B8-a3356b227/",
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    color: "text-blue-400",
  },
  {
    href: "https://github.com/balle-mech",
    icon: "fa-brands fa-github",
    label: "GitHub",
    color: "",
  },
];

const HeroSection = () => {
  return (
    <div
      id="home"
      className="container mx-auto mt-16 flex w-full items-center justify-between px-8 md:px-5 lg:px-15"
    >
      <div className="flex flex-wrap items-center md:flex-nowrap">
        <div className="flex max-w-sm flex-wrap justify-center md:my-36 md:justify-start lg:ml-20">
          <h1 className="w-full text-center text-4xl font-bold md:text-left md:text-5xl lg:text-6xl">
            Atsushi Fukunaga
          </h1>
          <div className="mt-6 flex justify-center gap-5 md:justify-start">
            {SOCIAL_LINKS.map(({ href, icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-2xl transition-colors duration-200 hover:text-selected-text ${color}`}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
        <img
          src="images/bread.png"
          alt="top image"
          className="right-6 -z-10 mx-auto mt-12 w-1/4 md:absolute md:mt-0 lg:w-1/3"
        />
      </div>
    </div>
  );
};

export default HeroSection;
