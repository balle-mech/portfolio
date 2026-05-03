interface Certification {
  name: string;
  issuer: string;
  iconType: "img" | "fa";
  icon: string;
  iconAlt?: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    iconType: "img",
    icon: "images/stacked-lockup-full-color-white-rgb.svg",
    iconAlt: "Databricks Logo",
  },
  {
    name: "基本情報技術者試験",
    issuer: "IPA（情報処理推進機構）",
    iconType: "fa",
    icon: "fa-solid fa-laptop-code",
  },
];

const CertificationsSection = () => {
  return (
    <div
      id="certifications"
      className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-5 lg:px-15"
    >
      <section className="w-full">
        <h2 className="secondary-title">資格・認定</h2>
        <p className="section-paragraph">取得した資格・認定一覧</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-6 border border-purple-300 p-6 rounded-md transition-all duration-300 hover:border-yellow-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-16">
                {cert.iconType === "img" ? (
                  <img src={cert.icon} alt={cert.iconAlt} className="w-16" />
                ) : (
                  <i className={`${cert.icon} text-5xl text-purple-300`}></i>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-base">{cert.name}</h3>
                <p className="text-secondary text-sm mt-1">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CertificationsSection;
