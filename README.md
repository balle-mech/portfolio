# Portfolio

ポートフォリオサイト

## 技術スタック

- React 19.1.1
- TypeScript 5.9.2（strict mode）
- Vite 7.1.5
- Tailwind CSS 4.1.11
- Jest + React Testing Library

## 実装内容

- レスポンシブデザイン（モバイル対応）
- カスタムフック（`useHamburgerMenu`）によるUI状態管理
- Jest + React Testing Libraryによるテスト
  - ユーザーインタラクションテスト
  - DOM操作テスト
  - アクセシビリティ対応（Escapeキー等）
- ESLint + Prettierによるコード品質管理

## ディレクトリ構成

```
src/
├── components/           # Reactコンポーネント
│   └── Header.tsx
├── hooks/                # カスタムフック
│   └── useHamburgerMenu.ts
├── test/                 # テスト
│   └── main.test.tsx
├── App.tsx
└── main.tsx
```

## 開発者向け情報

セットアップやビルド手順は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。
