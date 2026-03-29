# [作業タイトル]

**作成日**: YYYY-MM-DD
**担当**: [担当者名]
**ステータス**: 🟡 進行中 / ✅ 完了 / 🔴 ブロック中

---

## 作業の要求内容

### 機能説明

この作業で追加・変更する機能の概要を記載。

**例**: ダークモード切り替え機能を追加し、ユーザーが明/暗テーマを選択できるようにする。

### ユーザーストーリー

```
As a [ユーザーの役割]
I want to [実現したいこと]
So that [得られる価値]
```

**例**:

```
As a サイト訪問者
I want to ダークモードとライトモードを切り替えたい
So that 目に優しい表示で閲覧できる
```

### 受け入れ条件

- [ ] 条件1: ヘッダーにテーマ切り替えボタンが表示される
- [ ] 条件2: ボタンをクリックするとテーマが切り替わる
- [ ] 条件3: 選択したテーマがローカルストレージに保存される
- [ ] 条件4: ページリロード後もテーマ設定が維持される
- [ ] 条件5: すべてのコンポーネントがダークモードに対応している

### 制約事項

- 技術的制約: Tailwind CSSのdark:クラスを使用
- デザイン制約: 既存のカラーパレットに準拠
- パフォーマンス制約: テーマ切り替え時のちらつきを防ぐ

---

## 変更内容の設計

### 変更するコンポーネント

#### 新規作成

- `src/hooks/useTheme.ts` - テーマ状態管理フック
- `src/components/ThemeToggleButton.tsx` - テーマ切り替えボタン

#### 修正

- `src/App.tsx` - ダークモードクラスの適用
- `src/components/Header.tsx` - ThemeToggleButtonの追加
- `tailwind.config.js` - ダークモード設定の追加

#### 削除

- なし

### 実装アプローチ

#### 1. テーマ状態管理

```typescript
// src/hooks/useTheme.ts
export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // ローカルストレージからの読み込み
  // システムの設定を検知
  // テーマの切り替え

  return { theme, toggleTheme };
};
```

#### 2. UI コンポーネント

- ヘッダーにトグルボタンを配置
- アイコン: 太陽（ライト） / 月（ダーク）
- トランジション: スムーズなアニメーション

#### 3. スタイリング

- Tailwind CSS の `dark:` プレフィックスを使用
- すべてのコンポーネントにダークモード対応のクラスを追加

### データ構造の変更

#### ローカルストレージ

```json
{
  "theme": "dark" | "light"
}
```

#### 状態管理

- ローカル状態（useState）で管理
- 将来的にContext APIへの移行を検討

### 影響範囲の分析

#### 影響を受けるファイル

- `src/App.tsx` - ダークモードクラスの適用
- `src/components/*.tsx` - 全コンポーネントのスタイル調整
- `tailwind.config.js` - 設定追加

#### パフォーマンス影響

- ローカルストレージ読み書き: 微小
- 再レンダリング: App直下のみ（最小限）

#### テスト影響

- 新規テスト追加: `useTheme.test.ts`, `ThemeToggleButton.test.tsx`
- 既存テストの修正: 不要（ダークモードはオプショナル）

---

## タスクリスト

### 設計フェーズ

- [x] 要件定義
- [x] 設計書作成
- [ ] レビュー・承認

### 実装フェーズ

- [ ] `useTheme` フック実装
- [ ] `ThemeToggleButton` コンポーネント実装
- [ ] `Header` への統合
- [ ] 全コンポーネントのダークモード対応
- [ ] Tailwind 設定更新

### テストフェーズ

- [ ] ユニットテスト作成
- [ ] 手動テスト（各デバイス）
- [ ] アクセシビリティチェック

### デプロイフェーズ

- [ ] develop ブランチへマージ
- [ ] CI パス確認
- [ ] main ブランチへ PR 作成
- [ ] 本番デプロイ

---

## 備考・メモ

### 参考リンク

- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [useLocalStorage フックの実装例](https://usehooks.com/useLocalStorage/)

### 検討事項

- システムのダークモード設定を優先するか、ユーザーの選択を優先するか
- アニメーションの実装方法（Tailwind transitions vs CSS animations）

### ブロッカー

現時点でなし

---

**最終更新日**: YYYY-MM-DD
