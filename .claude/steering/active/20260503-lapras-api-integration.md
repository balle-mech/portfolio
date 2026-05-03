# ステアリングドキュメント: Lapras API連携による動的コンテンツ実装

## 作業の要求内容

### 機能説明

ポートフォリオサイトに Lapras Public API を利用した動的コンテンツ表示を追加する。
静的な画像ギャラリーを廃止し、GitHub リポジトリ・アクティビティ・資格情報を表示するセクションに刷新する。

### ユーザーストーリー

- サイト訪問者として、エンジニアの GitHub プロジェクトを一覧で確認したい
- サイト訪問者として、エンジニアの技術的アクティビティ（勉強会参加・技術記事・PR）を時系列で確認したい
- サイト訪問者として、エンジニアが取得した資格・認定を確認したい
- サイト運営者として、Lapras プロフィールを更新するだけでサイトに自動反映させたい

### 受け入れ条件

- [ ] GitHubリポジトリ（自分が owner かつ fork でないもの）がカード形式で表示される
- [ ] アクティビティ（connpass / github_pr / qiita / zenn）が日付降順で表示される
- [ ] 資格（Databricks Data Engineer Associate・基本情報技術者試験）が表示される
- [ ] ローディング中はプレースホルダーを表示する
- [ ] API取得失敗時もサイトが壊れない（エラー表示）
- [ ] ナビゲーションにアクティビティ・資格リンクが追加される
- [ ] モバイル表示が崩れない

### 制約事項

- Lapras API トークン不要（パブリックエンドポイントのみ使用）
- エンドポイント: `https://lapras.com/public/KKNCVCX.json`
- 静的サイト（GitHub Pages）のため、サーバーサイド処理なし
- blog_articles は現在空のため、データがある場合のみ表示

---

## 変更内容の設計

### 変更コンポーネント

| ファイル | 変更種別 | 内容 |
|---|---|---|
| `src/hooks/useLaprasData.ts` | 新規 | Lapras API フェッチカスタムフック |
| `src/components/OutputSection.tsx` | 変更 | 静的画像 → GitHubリポジトリカード |
| `src/components/ActivitiesSection.tsx` | 新規 | アクティビティ一覧 |
| `src/components/CertificationsSection.tsx` | 新規 | 資格・認定（静的データ） |
| `src/App.tsx` | 変更 | データフェッチ統合・新セクション追加 |
| `src/components/Header.tsx` | 変更 | ナビゲーションリンク追加 |
| `src/components/MobileMenu.tsx` | 変更 | モバイルナビリンク追加 |

### 実装アプローチ

**データ取得**: `App.tsx` で `useLaprasData` を一度だけ呼び出し、各コンポーネントに props で必要なデータのみ渡す（複数回フェッチを防ぐ）。

**フィルタリング**:
- github_repositories: `is_owner === true && is_fork === false` のもののみ
- activities: 直近20件（date降順）

**型定義**: `src/hooks/useLaprasData.ts` 内で export

### データ構造

```typescript
interface Activity {
  title: string;
  url: string;
  date: string;
  type: "connpass" | "github" | "github_pr" | "qiita" | "zenn";
}

interface GitHubRepository {
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

interface LaprasData {
  activities: Activity[];
  github_repositories: GitHubRepository[];
  blog_articles: { title: string; url: string; date: string }[];
}
```

### 影響範囲分析

- `public/images/portfolio*.jpg` は削除しない（参照されなくなるが、ファイル自体は残す）
- ナビゲーション構造の変更: `#output`・`#skills`・`#contact` に加え `#activities`・`#certifications` を追加
- CORS: Lapras パブリックエンドポイントはブラウザからの直接フェッチを前提とした公開APIのため問題なしと判断。問題が発生した場合は GitHub Actions でビルド時にフェッチしてstaticファイルに保存する方式に切り替える。

---

## タスクリスト

- [x] `src/hooks/useLaprasData.ts` 作成
- [x] `src/components/OutputSection.tsx` 更新（GitHubリポジトリカード）
- [x] `src/components/ActivitiesSection.tsx` 新規作成
- [x] `src/components/CertificationsSection.tsx` 新規作成
- [x] `src/App.tsx` 更新
- [x] `src/components/Header.tsx` 更新
- [x] `src/components/MobileMenu.tsx` 更新
- [x] ビルド確認（tsc + vite build 成功）・ESLint エラーなし
- [x] 永続的ドキュメント（architecture.md・product-requirements.md）更新

## 追加対応（フィードバック反映）

- [x] CORS エラー修正: Vite dev proxy + GitHub Actions build-time fetch 方式に変更
  - `scripts/fetch-lapras.mjs` 作成（CI用フェッチスクリプト）
  - `package.json` に `fetch-lapras` スクリプト追加
  - `vite.config.ts` に dev proxy 設定追加（`/lapras.json` → Lapras API）
  - `cd.yml` に fetch-lapras ステップ追加
  - `tsconfig.json` に `vite/client` 型追加
  - `public/lapras.json` を `.gitignore` に追加
- [x] SkillsSection スタイル修正: margin collapse → flex col gap-6、アイコンサイズ統一（h-12）
- [x] HeroSection にソーシャルリンク追加（X・LinkedIn・GitHub）
- [x] ContactSection 間隔修正: mt-32 → mt-64
- [x] `.claude/rules/` ディレクトリ作成（tdd.md・development-process.md）
- [x] CLAUDE.md に TDD 開発方針と rules ディレクトリ参照を追加
