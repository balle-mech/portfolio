# 開発ガイド

## 環境構築

### 必要な環境
- Node.js 22.x
- npm

### セットアップ

```bash
npm install
```

## 開発

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く

### Docker使用時

```bash
# ビルド
docker build -t portfolio .

# 起動
docker run -it -p 3000:3000 -v $(pwd):/app portfolio

# コンテナ内で開発サーバー起動
npm run dev
```

## コマンド一覧

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動（ポート3000） |
| `npm run build` | TypeScriptコンパイル + プロダクションビルド |
| `npm run preview` | ビルドのプレビュー |
| `npm run test` | Jestテスト実行 |
| `npm run css:build` | Tailwind CSSビルド（圧縮） |
| `npm run css:watch` | Tailwind CSS監視ビルド |

## ビルドプロセス

### 開発環境
```bash
npm run dev
```

1. Vite開発サーバー起動（ポート3000）
2. HMR（Hot Module Replacement）有効化
3. TypeScriptトランスパイル（オンデマンド）
4. ブラウザで `http://localhost:3000` にアクセス

### 本番ビルド
```bash
npm run build
```

1. TypeScriptコンパイル (`tsc`)
2. Viteバンドル（最適化、圧縮）
3. 成果物: `dist/` ディレクトリに出力

### プレビュー
```bash
npm run preview
```

ビルド済みの `dist/` をローカルで確認

### デプロイ
GitHub Actionsで自動実行（`main` ブランチへのマージ時）：

1. `npm run build` 実行
2. `dist/` を GitHub Pages にデプロイ
3. https://balle-mech.github.io/portfolio/ で公開

## テスト

```bash
npm run test
```

## プロジェクト構成

詳細は [リポジトリ構造定義書](.claude/docs/repository-structure.md) を参照。

```
portfolio/
├── .claude/              # Claude開発管理
│   ├── docs/             # 永続的ドキュメント
│   ├── steering/         # ステアリングドキュメント
│   └── templates/        # テンプレート
├── src/
│   ├── components/       # Reactコンポーネント
│   ├── hooks/            # カスタムフック
│   ├── css/              # スタイルシート
│   ├── images/           # 画像アセット
│   ├── test/             # テストファイル
│   ├── App.tsx           # ルートコンポーネント
│   ├── main.tsx          # エントリーポイント
│   └── index.html        # HTMLテンプレート
├── dist/                 # ビルド出力（Git管理外）
└── (設定ファイル群)
```

## 設定ファイル

### Vite設定（vite.config.ts）
- ソースルート: `src/`
- ビルド出力: `dist/`
- 開発サーバー: ポート3000、自動オープン

### TypeScript設定（tsconfig.json）
- strict mode有効
- JSX: react-jsx（React 17+の自動ランタイム）
- ターゲット: ES2020

### Jest設定
- 環境: jsdom
- Babel使用（JSX/TypeScript対応）
