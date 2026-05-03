# ステアリングドキュメント: アクティビティセクション UI再設計

## 作業の要求内容

### 機能説明

現在のアクティビティセクションは「カード間gapゼロ・ラベルコントラスト低・1カラム」という問題がある。
ワイドスクリーンを活かした2カラムレイアウト（タイムライン + フィルターパネル）に再設計する。

### 受け入れ条件

- [x] カードが独立して見える（gap あり）
- [x] タイプバッジが色分けされ視覚的に区別できる
- [x] 月単位グループ + sticky月ヘッダーのタイムライン表示
- [x] lg以上: 左タイムライン(flex-1) | 右フィルターパネル(lg:w-2/5)
- [x] md以下: フィルターパネルが上部、タイムラインが下部（非表示にしない）
- [x] フィルターで各タイプの表示/非表示を切り替えられる
- [x] デザイントークンが `.claude/docs/ui-design-spec.md` として記録されている

### 制約事項

- Lapras APIのactivityデータ: title, url, date, type のみ（subtitle/meta情報なし）
- 既存の `ActivitiesSection` の props インターフェースを維持する
- デザイントークンを `src/css/input.css` に追加する

---

## 変更内容の設計

### 変更コンポーネント

| ファイル | 変更種別 | 内容 |
|---|---|---|
| `src/css/input.css` | 変更 | surface-1/2 カラートークン追加 |
| `src/utils/activityGroups.ts` | 新規 | 月・日グループ化ユーティリティ |
| `src/utils/activityGroups.test.ts` | 新規 | ユーティリティのユニットテスト |
| `src/hooks/useActivityFilter.ts` | 新規 | タイプフィルター状態管理フック |
| `src/hooks/useActivityFilter.test.ts` | 新規 | フックのユニットテスト |
| `src/components/activities/ActivityBadge.tsx` | 新規 | タイプバッジコンポーネント |
| `src/components/activities/ActivityCard.tsx` | 新規 | アクティビティカードコンポーネント |
| `src/components/activities/ActivityTimeline.tsx` | 新規 | タイムラインコンポーネント |
| `src/components/activities/ActivitySidePanel.tsx` | 新規 | フィルターサイドパネル |
| `src/components/ActivitiesSection.tsx` | 変更 | 新コンポーネントを組み合わせた2カラムレイアウト |

### 判断事項

- 右パネルはオプションB（フィルター）を採用：APIデータが activities のみで集計が自然
- `bg-white/8` など Tailwind の opacity modifier を使用（CSS変数でなくTailwindで表現）
- タイムライン: DOM順は「フィルター先・タイムライン後」にし order クラスで制御

---

## タスクリスト

- [x] `src/css/input.css` にサーフェスカラートークン追加
- [x] `src/utils/activityGroups.ts` 作成
- [x] `src/utils/activityGroups.test.ts` 作成
- [x] `src/hooks/useActivityFilter.ts` 作成
- [x] `src/hooks/useActivityFilter.test.ts` 作成
- [x] `src/components/activities/ActivityBadge.tsx` 作成
- [x] `src/components/activities/ActivityCard.tsx` 作成
- [x] `src/components/activities/ActivityTimeline.tsx` 作成
- [x] `src/components/activities/ActivitySidePanel.tsx` 作成
- [x] `src/components/ActivitiesSection.tsx` 更新
- [x] `npm run css:build` でTailwind CSS再生成
- [x] ビルド・テスト確認
