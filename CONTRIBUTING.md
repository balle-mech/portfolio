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

## ビルド

```bash
npm run build
```

成果物: `dist/` ディレクトリに出力

## テスト

```bash
npm run test
```

## プロジェクト構成

```
portfolio/
├── src/
│   ├── components/       # Reactコンポーネント
│   │   └── Header.tsx
│   ├── hooks/            # カスタムフック
│   │   └── useHamburgerMenu.ts
│   ├── css/              # スタイルシート
│   │   ├── input.css     # Tailwind入力ファイル
│   │   └── output.css    # コンパイル済みCSS
│   ├── test/             # テストファイル
│   │   └── main.test.tsx
│   ├── App.tsx           # ルートコンポーネント
│   ├── main.tsx          # エントリーポイント
│   └── index.html        # HTMLテンプレート
├── dist/                 # ビルド出力ディレクトリ
├── vite.config.ts        # Vite設定
├── tsconfig.json         # TypeScript設定（strict mode有効）
├── jest.config.js        # Jest設定
└── package.json          # 依存関係
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
