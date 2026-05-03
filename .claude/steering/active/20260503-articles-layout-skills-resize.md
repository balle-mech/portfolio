# ステアリングドキュメント: 記事一覧追加・レイアウト再構成・スキルカードリサイズ

## 作業の要求内容

### 機能説明

1. Lapras API の activities から zenn/qiita 記事を抽出し「記事」セクションとして表示
2. PC レイアウト: 左列 = GitHub リポジトリ（上） + 記事（下）、右列 = アクティビティ（縦長）
3. スキルスタックカードを GitHub リポジトリ・資格カードと同サイズ感に縮小
4. スキルセクションを資格・認定の下に移動

### 受け入れ条件

- [ ] Zenn/Qiita 記事が記事一覧として表示される
- [ ] PC: 左列（GitHub + 記事） | 右列（アクティビティ）
- [ ] モバイル: 縦積み（GitHub → 記事 → アクティビティ）
- [ ] スキルカードが資格・認定カードと同程度のサイズ感
- [ ] ページ順: HeroSection → CertificationsSection → SkillsSection → [GitHub+記事|Activities] → ContactSection

### 制約事項

- 記事データは activities の type === 'zenn' || type === 'qiita' でフィルター
- 既存コンポーネントのスタイルトークンを統一（左列は border-purple-300 系）

---

## 変更内容の設計

### 変更コンポーネント

| ファイル | 変更種別 | 内容 |
|---|---|---|
| `src/components/ArticlesSection.tsx` | 新規 | Zenn/Qiita 記事カード一覧 |
| `src/components/SkillsSection.tsx` | 変更 | カードをコンパクトに（grid 2列、アイコン text-4xl、p-6） |
| `src/App.tsx` | 変更 | レイアウト再構成、SkillsSection 移動 |

### カードスタイル方針

- ArticleCard: `border border-purple-300 p-5 rounded-md` (RepoCard と統一)
- SkillCard: `flex items-center gap-4 border border-purple-300 p-6 rounded-md`、`grid grid-cols-1 gap-6 md:grid-cols-2`

---

## タスクリスト

- [x] `src/components/ArticlesSection.tsx` 作成
- [x] `src/components/SkillsSection.tsx` カードリサイズ
- [x] `src/App.tsx` レイアウト更新・セクション順序変更
- [x] ビルド・テスト確認
