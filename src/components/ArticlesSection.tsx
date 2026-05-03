import type { Activity } from "../hooks/useLaprasData";

interface ArticlesSectionProps {
  activities: Activity[];
  loading: boolean;
  error: Error | null;
}

const formatDate = (dateStr: string): string => {
  const [y, m, d] = dateStr.split("T")[0].split("-");
  return `${y}/${m}/${d}`;
};

const ArticleCard = ({ article }: { article: Activity }) => {
  const isZenn = article.type === "zenn";
  const badgeClass = isZenn
    ? "bg-sky-950 text-sky-400"
    : "bg-green-950 text-green-400";
  const label = isZenn ? "Zenn" : "Qiita";

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 border border-purple-300 p-5 rounded-md transition-all duration-300 hover:border-yellow-300"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
        >
          {label}
        </span>
        <span className="text-xs text-secondary">
          {formatDate(article.date)}
        </span>
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-white">
        {article.title}
      </p>
    </a>
  );
};

const ArticlesSection = ({ activities, loading, error }: ArticlesSectionProps) => {
  const articles = activities
    .filter((a) => a.type === "qiita" || a.type === "zenn")
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  return (
    <section id="articles" className="w-full">
      <h2 className="secondary-title">記事</h2>
      <p className="section-paragraph">ZennとQiitaの投稿記事</p>

      {loading && (
        <div className="grid grid-cols-1 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border border-purple-300/30 rounded-md p-5 h-24 animate-pulse bg-gray-800/20"
            />
          ))}
        </div>
      )}

      {error && (
        <p className="text-secondary text-sm">記事の取得に失敗しました。</p>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-secondary text-sm">記事がありません。</p>
      )}

      {!loading && !error && articles.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticlesSection;
