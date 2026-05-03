# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のマスタードキュメントです。

## ドキュメント構成

### 永続的ドキュメント

プロジェクトが存続する限り継続的に更新される基準ドキュメント。

- **CLAUDE.md**（本ファイル）: 開発方針、ドキュメント管理方針
- **[プロダクト要求定義書](.claude/docs/product-requirements.md)**: プロダクトのビジョン、目的、要求事項
- **[技術仕様書](.claude/docs/architecture.md)**: アーキテクチャ、技術選定、UI/UX設計、API設計
- **[リポジトリ構造定義書](.claude/docs/repository-structure.md)**: ディレクトリ構造、ファイル命名規則

### ステアリングドキュメント（作業単位）

タスク単位で作成する作業指示書。作成・更新・アーカイブのプロセスは [development-process.md](.claude/rules/development-process.md) を参照。

## 開発について

- ビルドコマンド・環境構築: [CONTRIBUTING.md](CONTRIBUTING.md)
- TDD ルール: [.claude/rules/tdd.md](.claude/rules/tdd.md)
- 開発プロセス（ステアリングDoc・ブランチ戦略等）: [.claude/rules/development-process.md](.claude/rules/development-process.md)

## ドキュメント作成のルール

### 書かないこと（メンテナンス負荷を抑える）

- **ソースコードを読めばわかること**: 関数の実装詳細、具体的なコード例（コードとドキュメントの乖離が発生する）
- **他のドキュメントと重複する内容**: 同じ情報を複数箇所に書かない。必要ならリンクで参照する
- **自動取得可能な情報**: ディレクトリツリー（`tree`/`ls` で取得可能）、依存パッケージ一覧（`package.json` で確認可能）

### 書くこと

- **方針・ルール**: なぜそうするのか（Why）、どうあるべきか（What）
- **設計思想**: 技術選定の理由、アーキテクチャの方針

### 図表

- 設計変更時は対応する図表も同時に更新してコードとの乖離を防ぐ

## 注意事項

- 共通のデザインシステム（Tailwind CSS）を使用して統一感を保つ
