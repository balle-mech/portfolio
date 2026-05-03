# 開発プロセスルール

## 作業開始前

1. ステアリングドキュメントを `.claude/steering/active/YYYYMMDD-{task-title}.md` に作成する（ディレクトリではなくファイル直接）
2. ステアリングドキュメントには「要求内容」「変更設計」「タスクリスト」を記載する

## 実装中

- TDD に従う（詳細は `tdd.md` を参照）
- ステアリングドキュメントのタスクリストを随時更新する
- 永続的ドキュメント（architecture.md・product-requirements.md）と乖離する変更をした場合は即座に更新する

## 作業完了後

1. ステアリングドキュメントのタスクリストを全て完了状態にする
2. `.claude/steering/active/YYYYMMDD-{task-title}.md` を `.claude/steering/archive/` に移動する
3. 永続的ドキュメントを最新状態に更新する

## ブランチ・コミット戦略

- ブランチ: `feat/`, `fix/`, `chore/`, `docs/` プレフィックスを使用
- コミットメッセージ: conventional commits 形式（`feat:`, `fix:`, `docs:` 等）
- PR は機能単位で作成する

## コードレビュー観点

- TypeScript の型は `any` を使わない
- コンポーネントは単一責任を保つ
- カスタムフックにロジックを集約し、コンポーネントを薄くする
