# 技術仕様書

## アーキテクチャ概要

### システム構成
```
┌─────────────────────────────────────┐
│         GitHub Pages                │
│      (静的サイトホスティング)        │
└─────────────────────────────────────┘
              ↑
              │ デプロイ
              │
┌─────────────────────────────────────┐
│      GitHub Actions (CI/CD)         │
│  ・ビルド                            │
│  ・テスト                            │
│  ・デプロイ                          │
└─────────────────────────────────────┘
              ↑
              │ push
              │
┌─────────────────────────────────────┐
│       開発環境 (ローカル)            │
│  ・Vite 開発サーバー                 │
│  ・Docker (optional)                │
└─────────────────────────────────────┘
```

### 技術スタック

#### フロントエンド
| 技術 | バージョン | 選定理由 |
|------|-----------|---------|
| React | 19.x | コンポーネントベース開発、豊富なエコシステム |
| TypeScript | 5.x | 型安全性、開発体験の向上 |
| Vite | 7.x | 高速なHMR、モダンなビルドツール |
| Tailwind CSS | 3.x | ユーティリティファースト、迅速なスタイリング |

#### テスト
| 技術 | バージョン | 選定理由 |
|------|-----------|---------|
| Jest | 29.x | デファクトスタンダード、豊富な機能 |
| React Testing Library | - | ユーザー視点のテスト |
| jsdom | - | Node環境でのDOM操作 |

#### 開発ツール
| 技術 | バージョン | 選定理由 |
|------|-----------|---------|
| ESLint | 9.x | 静的解析、コード品質維持 |
| Prettier | 3.x | 一貫したコードフォーマット |
| Docker | - | 開発環境の統一 |

#### CI/CD
| 技術 | 選定理由 |
|------|---------|
| GitHub Actions | GitHubネイティブ、無料枠で十分 |
| GitHub Pages | 静的サイト、無料、簡単なデプロイ |

## UI/UX 設計方針

### デザイン原則
- **ミニマル**: 余白を活かしたシンプルなデザイン
- **プロフェッショナル**: 落ち着いたダークカラーパレット
- **レスポンシブ**: モバイル/タブレット/デスクトップ対応

### カラーパレット
- 背景: ダークグレー (`bg-body`)
- テキスト: 白 (`text-white`)
- アクセント: 黄色 (`text-yellow-300`)、紫 (`border-purple-300`)

### インタラクション
- スムーズスクロール（アンカーリンク）
- ホバーエフェクト（色変更、トランスフォーム）
- モバイルメニューアニメーション（フェードイン/アウト、ハンバーガー→X）

## コンポーネント設計

### コンポーネント階層
```
App
├── Header
│   └── MobileMenu
├── HeroSection
├── OutputSection        ← Lapras API: github_repositories
├── ActivitiesSection    ← Lapras API: activities
├── SkillsSection
├── CertificationsSection ← 静的定数（src内で管理）
└── ContactSection
```

### 設計方針
- **単一責任**: 各コンポーネントは1つの責任のみを持つ
- **Props駆動**: 外部からの入力はPropsで受け取る
- **カスタムフック**: ロジックをコンポーネントから分離

### 主要なインターフェース

#### MobileMenu
```typescript
interface MobileMenuProps {
  isOpen: boolean;    // メニューの開閉状態
  onClose: () => void; // 閉じる処理のコールバック
}
```

## データフロー

### 状態管理戦略
- **ローカル状態**: `useState` を各コンポーネントで管理
- **グローバル状態**: 現在不要（将来的にContext APIまたは状態管理ライブラリ検討）

### イベントフロー
```
ユーザー操作
  ↓
イベントハンドラ (onClick, onChange)
  ↓
状態更新 (setState)
  ↓
再レンダリング
  ↓
UI 更新
```

## API 設計

### 外部サービス連携

#### Lapras Public API (動的コンテンツ)
- **エンドポイント**: `https://lapras.com/public/KKNCVCX.json`
- **呼び出し方式**: クライアントサイドフェッチ（`useLaprasData` カスタムフック）
- **取得データ**: `activities`、`github_repositories`、`blog_articles`
- **フィルタ**: github_repositories は `is_owner === true && is_fork === false` のみ表示
- **表示件数**: activities は日付降順で最新20件

#### Formspree (お問い合わせフォーム)
- **選定理由**: サーバーレス、無料プラン、簡単な統合
- **エンドポイント**: `https://formspree.io/f/manbgpyy`
- **メソッド**: POST
- **ペイロード**:
```typescript
{
  name: string;        // お名前
  email: string;       // メールアドレス
  message: string;     // メッセージ内容
}
```

## セキュリティ

### 実装済み対策
- **HTTPS 強制**: GitHub Pagesによる自動対応
- **XSS 対策**: Reactの自動エスケープ
- **フォームバリデーション**: HTML5バリデーション (`required`, `type="email"`)

### 将来実装
- CSP（Content Security Policy）ヘッダー
- クライアントサイドバリデーション強化
- reCAPTCHA導入（スパム対策）

## パフォーマンス最適化

### 現在の実装
- Viteによる高速ビルド
- Tree shaking（未使用コードの削除）
- コード圧縮

### 将来の最適化方針
- **React最適化**
  - React.memo（不要な再レンダリング防止）
  - useMemo / useCallback（計算結果のメモ化）
  - Code splitting（React.lazy, Suspense）

- **アセット最適化**
  - 画像のWebP変換
  - 画像の遅延読み込み
  - アイコンのSVGスプライト化

### パフォーマンス目標
- Lighthouse スコア: 全項目90点以上
- 初回表示: 3秒以内（4G環境）

## テスト戦略

### テストレベル
| レベル | 対象 | 現在 | 将来 |
|--------|------|------|------|
| ユニットテスト | コンポーネント、フック | ✅ | - |
| 統合テスト | コンポーネント連携 | - | 検討中 |
| E2Eテスト | ユーザーフロー | - | Playwright検討 |

### テストカバレッジ目標
- **コードカバレッジ**: 70%以上
- **重要機能**: 100%（フォーム送信、ナビゲーション）

## 監視・ロギング

### 現在
- GitHub Actionsのビルドログ

### 将来実装検討
- **アクセス解析**: Google Analytics
- **エラートラッキング**: Sentry
- **パフォーマンス監視**: Lighthouse CI

## デプロイ戦略

### デプロイフロー
```
feature/xxx → develop → main → GitHub Pages
```

1. 機能ブランチから `develop` へ PR
2. CI（テスト・ビルドチェック）パス確認
3. `develop` から `main` へ PR
4. CD（自動デプロイ）実行
5. GitHub Pages 公開

### ロールバック戦略
- Git revert でコミットを取り消し
- 再デプロイで前のバージョンに戻す

---

**最終更新日**: 2026-05-03
**バージョン**: 1.1
