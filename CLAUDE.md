# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 開発コマンド

- **開発サーバー**: `npm run dev` - Vite開発サーバーをポート3000で起動
- **ビルド**: `npm run build` - TypeScriptコンパイル + Viteビルド（`dist/`に出力）
- **プレビュー**: `npm run preview` - プロダクションビルドをプレビュー
- **テスト**: `npm run test` - jsdom環境でJestテストを実行
- **CSS ビルド**: `npm run css:build` - Tailwind CSSをビルド（圧縮）
- **CSS ウォッチ**: `npm run css:watch` - Tailwind CSSの変更を監視して自動ビルド

## プロジェクト構成

以下の構造を持つReactベースのポートフォリオサイトです：

- **ソースルート**: `src/` ディレクトリ（Viteで設定）
- **メインエントリ**: `src/main.tsx` がReactアプリを `src/index.html` にレンダリング
- **アプリ構造**: `App.tsx` をルートコンポーネントとするシンプルなコンポーネントベース構成
- **スタイリング**: Tailwind CSS（カスタム設定）
- **ビルドツール**: Vite + Reactプラグイン
- **テスト**: Jest + React Testing Library + jsdom環境

## 主要設定

- Viteは `src/` ディレクトリから配信し、`dist/` にビルド
- TypeScript strict mode 有効
- JSX transformはReact 17+の自動ランタイムを使用
- CSS入力: `src/css/input.css`、出力: `src/css/output.css`
- 開発サーバーはポート3000で自動オープン

## Docker設定

開発用に提供されているDockerfileを使用：

```bash
docker build -t portfolio .
docker run -it -p 3000:3000 -v $(pwd):/app portfolio
```

## ブランチ情報

現在は `chore/setup-react` ブランチ - React移行・セットアップ用ブランチと思われます。
