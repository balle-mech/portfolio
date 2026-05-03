# UI設計仕様書

> このドキュメントはスペーシング・カードスタイル・カラーパレットなど共通のデザイン基準を定義する。
> 新しいUIを実装する際はここを参照し、ここに反する実装をしない。

---

## 1. デザイントークン

### カラーシステム

```
// ページ背景・サーフェス（ダークテーマ）
--color-body:      #050505    ← bg-body     ページ背景
--color-surface-1: #161616    ← bg-surface-1 カード背景
--color-surface-2: #1f1f1f    ← bg-surface-2 カードhover背景

// テキスト
--color-primary:   #f0f0f0    ← text-white  主テキスト（Tailwind標準）
--color-secondary: #9191a4    ← text-secondary サブテキスト
text-gray-500                   ミュートテキスト（Tailwind標準）

// ボーダー
border-white/8                  通常ボーダー（rgba(255,255,255,0.08)）
border-white/15                 ホバーボーダー（rgba(255,255,255,0.15)）

// アクセント
--color-selected-text: #a3a3ff ← text-selected-text リンクhover等
--color-theme:    #5c318c       テーマパープル
```

### タイプバッジカラー（アクティビティ用）

| タイプ | 背景 | テキスト |
|---|---|---|
| Pull Request | `bg-blue-950` | `text-blue-400` |
| イベント（connpass） | `bg-violet-950` | `text-violet-400` |
| GitHub | `bg-neutral-800` | `text-gray-400` |
| Qiita | `bg-green-950` | `text-green-400` |
| Zenn | `bg-sky-950` | `text-sky-400` |

### スペーシング

| 用途 | クラス | 値 |
|---|---|---|
| カード間（アクティビティ） | `space-y-3` または `gap-3` | 12px |
| カード間（リポジトリ） | `gap-6` | 24px |
| セクション間 | `mt-64` | 256px |
| カードpadding | `px-5 py-4` | 20px / 16px |
| セクション内コンテンツ間 | `mb-8` | 32px |

### カードスタイル（標準）

```
bg-surface-1
border border-white/8
rounded-[10px]
px-5 py-4
transition-colors duration-150
hover:bg-surface-2
hover:border-white/15
```

---

## 2. コンポーネント仕様

### 2-1. ActivityCard

- バッジ（タイプ別カラー）+ タイトル + 右上↗アイコン（hover時表示）
- バッジは省略しない（すべてのカードに必須）
- 外部リンクは `target="_blank" rel="noopener noreferrer"`

### 2-2. アクティビティ タイムラインレイアウト

```
月ヘッダー（sticky top-0）
  日付ラベル(w-12) ● ──── ActivityCard
                        ActivityCard（同日複数）
  日付ラベル(w-12) ● ──── ActivityCard
```

- ドット: `w-2 h-2 rounded-full bg-white/15`
- 縦線: `w-px bg-white/8` （ドットの下に伸びる）
- 月ヘッダー: `sticky top-0 bg-body`
- 日付ラベル: `text-xs text-gray-500`

### 2-3. アクティビティ 2カラムレイアウト

```
lg以上: タイムライン(flex-1) | フィルターパネル(lg:w-2/5)
md以下: フィルターパネル（上部） → タイムライン（下部）
```

DOM順は「フィルターパネル先, タイムライン後」にして `order-*` で表示順を制御:
- フィルターパネル: `order-first lg:order-last`
- タイムライン: `order-last lg:order-first`

---

## 3. 禁止事項

- カード間の `gap` または `margin` を 0 にしない
- `gray-600`より暗い文字色をダーク背景に使わない（コントラスト比不足）
- タイプバッジを省略しない
- 右パネルをモバイルで隠すだけにしない（上部に移動して表示）
- インラインスタイルを使わない（Tailwindクラスかトークンを使用）
- `any` 型を使わない

---

**最終更新日**: 2026-05-03
