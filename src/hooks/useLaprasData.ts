import { useEffect, useState } from "react";

// 開発時は Vite proxy 経由、本番は GitHub Actions がビルド前に public/lapras.json を配置する
const LAPRAS_URL = `${import.meta.env.BASE_URL}lapras.json`;

export interface Activity {
  title: string;
  url: string;
  date: string;
  type: "connpass" | "github" | "github_pr" | "qiita" | "zenn";
}

export interface GitHubRepository {
  id: number;
  title: string;
  url: string;
  is_oss: boolean;
  is_fork: boolean;
  is_owner: boolean;
  description: string;
  stargazers_count: number;
  forks: number;
  contributors_count: number;
  language: string;
  languages: { name: string; bytes: number }[];
}

export interface LaprasData {
  activities: Activity[];
  github_repositories: GitHubRepository[];
  blog_articles: { title: string; url: string; date: string }[];
}

export interface UseLaprasDataResult {
  data: LaprasData | null;
  loading: boolean;
  error: Error | null;
}

export const useLaprasData = (): UseLaprasDataResult => {
  const [data, setData] = useState<LaprasData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(LAPRAS_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData({
          activities: json.activities ?? [],
          github_repositories: json.github_repositories ?? [],
          blog_articles: json.blog_articles ?? [],
        });
      })
      .catch((err: unknown) =>
        setError(err instanceof Error ? err : new Error(String(err)))
      )
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
