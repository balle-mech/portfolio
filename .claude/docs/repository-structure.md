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
main              # 本番環境（https://balle-mech.github.io/portfolio/）
  ↑
develop           # 開発統合・ステージング環境（https://balle-mech.github.io/portfolio/staging/）
  ↑
feature/xxx       # 機能追加
fix/xxx           # バグ修正
chore/xxx         # その他作業
hotfix/xxx        # 緊急修正（mainから分岐）
```

### 開発フロー

#### 通常の開発

1. **ブランチ作成**: `develop` から `feature/xxx` または `fix/xxx` を切る
2. **実装**: featureブランチで作業
3. **PR作成**: `feature/xxx` → `develop` へPR作成
4. **レビュー・CI確認**: テスト・ビルドが成功することを確認
5. **マージ**: `develop` へマージ
6. **ステージング確認**: https://balle-mech.github.io/portfolio/staging/ で動作確認
7. **本番リリース**: `develop` → `main` へPR作成・マージ

#### 緊急修正（本番障害）

1. **ブランチ作成**: `main` から `hotfix/xxx` を切る
2. **修正**: hotfixブランチで作業
3. **PR作成**: `hotfix/xxx` → `main` へPR作成
4. **レビュー・CI確認**: テスト・ビルドが成功することを確認
5. **マージ**: `main` へマージ
6. **バックマージ**: `main` → `develop` へもマージして同期

### ルール

- **mainへの直接マージ禁止**: 必ずPRを経由する
- **developからの作業**: 通常の開発は必ずdevelopから分岐
- **hotfixの例外**: 本番障害のみmainから直接分岐可能
- **PR必須**: すべてのマージはPRとレビューを経由

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
