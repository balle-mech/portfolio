interface Skill {
  name: string;
  iconType: "fa" | "img";
  icon: string;
  iconAlt?: string;
  iconColor?: string;
  tags: string[];
  description: string;
}

const SKILLS: Skill[] = [
  {
    name: "Python",
    iconType: "fa",
    icon: "fa-brands fa-python",
    iconColor: "text-yellow-300",
    tags: ["AI/ML", "データ"],
    description:
      "PoseC3Dを用いた不法投棄検知モデルの作成。PySparkでのデータ加工・テーブル作成。",
  },
  {
    name: "React",
    iconType: "fa",
    icon: "fa-brands fa-react",
    iconColor: "text-blue-400",
    tags: ["Webアプリ開発", "フロントエンド"],
    description: "日程調整Webアプリ開発、RAGチャットボット開発にて使用。",
  },
  {
    name: "Ruby on Rails",
    iconType: "img",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-rails-a-server-side-web-application-framework-written-in-ruby-logo-shadow-tal-revivo.png",
    iconAlt: "Ruby on Rails",
    tags: ["API開発", "バックエンド"],
    description: "日程調整Webアプリのバックエンド開発にて使用。",
  },
  {
    name: "Java",
    iconType: "fa",
    icon: "fa-brands fa-java",
    iconColor: "text-blue-400",
    tags: ["JavaEE", "Webアプリ開発"],
    description: "Webアプリ開発の研修にて使用。",
  },
  {
    name: "Azure Databricks",
    iconType: "img",
    icon: "./images/stacked-lockup-full-color-white-rgb.svg",
    iconAlt: "Databricks Logo",
    tags: ["Azureリソース設計・構築", "データ加工", "ダッシュボード開発"],
    description: "ワークスペースの設計・構築、ダッシュボード開発。",
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-5 border border-purple-300 p-6 rounded-md transition-all duration-300 hover:border-yellow-300">
    <div className="flex-shrink-0 flex items-center justify-center w-14">
      {skill.iconType === "fa" ? (
        <i className={`${skill.icon} text-4xl ${skill.iconColor}`}></i>
      ) : (
        <img
          src={skill.icon}
          alt={skill.iconAlt}
          className="w-12 h-12 object-contain"
        />
      )}
    </div>
    <div className="min-w-0">
      <h3 className="font-semibold text-base">{skill.name}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {skill.tags.map((tag) => (
          <div key={tag} className="badge">
            {tag}
          </div>
        ))}
      </div>
      <p className="text-secondary text-sm mt-2 line-clamp-2">
        {skill.description}
      </p>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-5 lg:px-15"
    >
      <section className="w-full">
        <h2 className="secondary-title">スキルスタック</h2>
        <p className="section-paragraph">業務・学習で使用した主要技術</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
