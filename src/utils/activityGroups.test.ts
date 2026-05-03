import type { Activity } from "../hooks/useLaprasData";
import { groupActivitiesByMonth } from "./activityGroups";

const a = (date: string, type: Activity["type"] = "github_pr"): Activity => ({
  title: "test",
  url: "https://example.com",
  date,
  type,
});

describe("groupActivitiesByMonth", () => {
  test("空配列は空のグループを返す", () => {
    expect(groupActivitiesByMonth([])).toHaveLength(0);
  });

  test("月ごとにグループ化される", () => {
    const groups = groupActivitiesByMonth([
      a("2026-05-01T00:00:00"),
      a("2026-04-15T00:00:00"),
    ]);
    expect(groups).toHaveLength(2);
    expect(groups[0].monthLabel).toBe("2026年5月");
    expect(groups[1].monthLabel).toBe("2026年4月");
  });

  test("最新月が先頭に来る", () => {
    const groups = groupActivitiesByMonth([
      a("2026-04-01T00:00:00"),
      a("2026-05-01T00:00:00"),
    ]);
    expect(groups[0].monthKey).toBe("2026-05");
  });

  test("同月内の日付が新しい順に並ぶ", () => {
    const groups = groupActivitiesByMonth([
      a("2026-05-01T00:00:00"),
      a("2026-05-10T00:00:00"),
      a("2026-05-05T00:00:00"),
    ]);
    const days = groups[0].days;
    expect(days[0].dayLabel).toBe("5月10日");
    expect(days[1].dayLabel).toBe("5月5日");
    expect(days[2].dayLabel).toBe("5月1日");
  });

  test("同日の複数アクティビティがまとめられる", () => {
    const groups = groupActivitiesByMonth([
      a("2026-05-01T00:00:00"),
      a("2026-05-01T12:00:00"),
    ]);
    expect(groups[0].days[0].items).toHaveLength(2);
  });

  test("日付ラベルが正しい形式", () => {
    const groups = groupActivitiesByMonth([a("2026-05-19T00:00:00")]);
    expect(groups[0].days[0].dayLabel).toBe("5月19日");
  });

  test("月ラベルが正しい形式", () => {
    const groups = groupActivitiesByMonth([a("2026-05-01T00:00:00")]);
    expect(groups[0].monthLabel).toBe("2026年5月");
  });
});
