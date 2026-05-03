import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import type { Activity } from "./useLaprasData";
import { useActivityPagination } from "./useActivityPagination";

const make = (i: number): Activity => ({
  title: `activity ${i}`,
  url: "https://example.com",
  date: "2026-05-01T00:00:00",
  type: "github_pr",
});

const activities = Array.from({ length: 15 }, (_, i) => make(i));

describe("useActivityPagination", () => {
  test("初期表示は6件", () => {
    const { result } = renderHook(() => useActivityPagination(activities));
    expect(result.current.visible).toHaveLength(6);
  });

  test("loadMore で5件追加される", () => {
    const { result } = renderHook(() => useActivityPagination(activities));
    act(() => result.current.loadMore());
    expect(result.current.visible).toHaveLength(11);
  });

  test("hasMore: 残りがある場合 true", () => {
    const { result } = renderHook(() => useActivityPagination(activities));
    expect(result.current.hasMore).toBe(true);
  });

  test("hasMore: 全件未満の場合 false", () => {
    const short = Array.from({ length: 4 }, (_, i) => make(i));
    const { result } = renderHook(() => useActivityPagination(short));
    expect(result.current.hasMore).toBe(false);
  });

  test("全件読み込み後は hasMore が false になる", () => {
    const { result } = renderHook(() => useActivityPagination(activities));
    act(() => result.current.loadMore()); // 11
    act(() => result.current.loadMore()); // 16 → slice で 15 件
    expect(result.current.hasMore).toBe(false);
    expect(result.current.visible).toHaveLength(15);
  });

  test("remaining は残件数を返す", () => {
    const { result } = renderHook(() => useActivityPagination(activities));
    expect(result.current.remaining).toBe(9);
    act(() => result.current.loadMore());
    expect(result.current.remaining).toBe(4);
  });
});
