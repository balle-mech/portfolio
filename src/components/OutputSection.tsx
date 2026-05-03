import type { GitHubRepository } from "../hooks/useLaprasData";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-sky-400",
  Ruby: "bg-red-500",
  CSS: "bg-purple-400",
  HTML: "bg-orange-500",
  Go: "bg-cyan-400",
  Rust: "bg-orange-600",
  Java: "bg-orange-400",
  Shell: "bg-gray-400",
};

interface OutputSectionProps {
  repositories: GitHubRepository[];
  loading: boolean;
  error: Error | null;
}

const RepoCard = ({ repo }: { repo: GitHubRepository }) => {
  const name = repo.title.includes("/") ? repo.title.split("/")[1] : repo.title;
  const colorClass = LANGUAGE_COLORS[repo.language] ?? "bg-gray-500";

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 border border-purple-300 p-6 rounded-md transition-all duration-300 hover:border-yellow-300"
    >
      <div className="flex items-center gap-2">
        <i className="fa-brands fa-github text-lg text-secondary group-hover:text-white transition-colors duration-300"></i>
        <h3 className="font-semibold text-base truncate">{name}</h3>
      </div>
      {repo.description && (
        <p className="text-secondary text-sm leading-relaxed line-clamp-2 flex-1">
          {repo.description}
        </p>
      )}
      <div className="flex items-center gap-4 text-sm text-secondary mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className={`inline-block w-3 h-3 rounded-full ${colorClass}`}></span>
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span>
            <i className="fa-solid fa-star text-yellow-300 mr-1"></i>
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks > 0 && (
          <span>
            <i className="fa-solid fa-code-fork mr-1"></i>
            {repo.forks}
          </span>
        )}
      </div>
    </a>
  );
};

const OutputSection = ({ repositories, loading, error }: OutputSectionProps) => {
  const repos = repositories
    .filter((r) => r.is_owner && !r.is_fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <section id="output" className="w-full">
      <h2 className="secondary-title">GitHubリポジトリ</h2>

      {loading && (
        <div className="mt-6 grid grid-cols-1 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border border-purple-300/30 rounded-md p-6 h-32 animate-pulse bg-gray-800/20"
            />
          ))}
        </div>
      )}

      {error && (
        <p className="mt-6 text-secondary">リポジトリの取得に失敗しました。</p>
      )}

      {!loading && !error && (
        <div className="mt-6 grid grid-cols-1 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
};

export default OutputSection;
