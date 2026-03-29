# リポジトリ構造定義書

## ディレクトリの役割

### `.github/workflows/`

CI/CD パイプラインの定義。GitHub Actions によって自動実行される。

### `.claude/`

Claude による開発管理のためのディレクトリ。

- **docs/**: 永続的ドキュメント（プロダクト要求、技術仕様など）
- **steering/active/**: 進行中のタスク
- **steering/archive/**: 完了したタスク
- **templates/**: ドキュメントテンプレート

### `src/`

アプリケーションのソースコード。

- **components/**: React コンポーネント
- **hooks/**: カスタムフック
- **css/**: Tailwind CSS ソースと出力
- **images/**: 画像・アイコン
- **test/**: テストコード

## ファイル配置ルール

### 命名規則

#### コンポーネント

- **ファイル名**: PascalCase (`Header.tsx`, `MobileMenu.tsx`)
- **配置**: `src/components/`

#### カスタムフック

- **ファイル名**: camelCase, `use` プレフィックス (`useHamburgerMenu.ts`)
- **配置**: `src/hooks/`

#### テスト

- **ファイル名**: `{target}.test.tsx`
- **配置**: `src/test/`

#### ステアリングドキュメント

- **ディレクトリ名**: `YYYYMMDD-{kebab-case-title}`
  - 例: `20260329-add-dark-mode`
- **ファイル名**: `README.md`
- **配置**: `.claude/steering/active/` → `.claude/steering/archive/` (完了後)

### 配置基準

#### 新規コンポーネント

1. UI コンポーネント → `src/components/`
2. ビジネスロジック → `src/hooks/` に抽出
3. テスト → `src/test/` に作成

#### 新規タスク

1. `.claude/steering/active/YYYYMMDD-{task}/` にステアリングドキュメント作成
2. 作業完了後、`.claude/steering/archive/` に移動

#### 永続的ドキュメント更新

重要な技術変更・アーキテクチャ変更があった場合：

- `.claude/docs/architecture.md`
- `.claude/docs/repository-structure.md`
- `CLAUDE.md`

を更新する。

## ブランチ戦略

### ブランチ構成

```
main              # 本番環境
  ↑
develop           # 開発統合
  ↑
feature/xxx       # 機能追加
fix/xxx           # バグ修正
chore/xxx         # その他作業
```

### マージフロー

1. 作業ブランチ → `develop` へ PR
2. CI パス確認
3. `develop` → `main` へ PR
4. CD 実行、GitHub Pages デプロイ

## Git 管理

### 管理対象

- ソースコード（`src/`）
- 永続的ドキュメント（`.claude/docs/`）
- ステアリングドキュメント（`.claude/steering/`）
- 設定ファイル

### 管理対象外（.gitignore）

- `node_modules/`
- `dist/`
- `*.log`
- `.DS_Store`

---

**最終更新日**: 2026-03-29
**バージョン**: 1.0
