import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import type { Activity } from "./useLaprasData";
import { useActivityFilter } from "./useActivityFilter";

const make = (type: Activity["type"]): Activity => ({
  title: "test",
  url: "https://example.com",
  date: "2026-05-01T00:00:00",
  type,
});

const activities: Activity[] = [
  make("github_pr"),
  make("connpass"),
  make("github"),
];

describe("useActivityFilter", () => {
  test("初期状態では全アクティビティが表示される", () => {
    const { result } = renderHook(() => useActivityFilter(activities));
    expect(result.current.filtered).toHaveLength(3);
  });

  test("タイプをトグルで非表示にできる", () => {
    const { result } = renderHook(() => useActivityFilter(activities));
    act(() => { result.current.toggle("connpass"); });
    expect(result.current.filtered.every((a) => a.type !== "connpass")).toBe(true);
  });

  test("再度トグルで表示に戻る", () => {
    const { result } = renderHook(() => useActivityFilter(activities));
    act(() => { result.current.toggle("connpass"); });
    act(() => { result.current.toggle("connpass"); });
    expect(result.current.filtered).toHaveLength(3);
  });

  test("activeTypesにトグル結果が反映される", () => {
    const { result } = renderHook(() => useActivityFilter(activities));
    expect(result.current.activeTypes.has("connpass")).toBe(true);
    act(() => { result.current.toggle("connpass"); });
    expect(result.current.activeTypes.has("connpass")).toBe(false);
  });

  test("最後の1タイプは非表示にできない", () => {
    const { result } = renderHook(() => useActivityFilter([make("github_pr")]));
    act(() => { result.current.toggle("connpass"); });
    act(() => { result.current.toggle("github"); });
    act(() => { result.current.toggle("qiita"); });
    act(() => { result.current.toggle("zenn"); });
    act(() => { result.current.toggle("github_pr"); });
    expect(result.current.activeTypes.has("github_pr")).toBe(true);
  });
});
