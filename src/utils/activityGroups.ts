import type { Activity } from "../hooks/useLaprasData";

export interface DayGroup {
  dayKey: string;
  dayLabel: string;
  items: Activity[];
}

export interface MonthGroup {
  monthKey: string;
  monthLabel: string;
  days: DayGroup[];
}

export const groupActivitiesByMonth = (activities: Activity[]): MonthGroup[] => {
  const monthMap = new Map<string, Map<string, Activity[]>>();

  for (const activity of activities) {
    const [dateStr] = activity.date.split("T");
    const [year, month, day] = dateStr.split("-").map(Number);
    const monthKey = `${year}-${String(month).padStart(2, "0")}`;
    const dayKey = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    if (!monthMap.has(monthKey)) monthMap.set(monthKey, new Map());
    const dayMap = monthMap.get(monthKey)!;
    if (!dayMap.has(dayKey)) dayMap.set(dayKey, []);
    dayMap.get(dayKey)!.push(activity);
  }

  return Array.from(monthMap.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([monthKey, dayMap]) => {
      const [year, month] = monthKey.split("-").map(Number);
      return {
        monthKey,
        monthLabel: `${year}年${month}月`,
        days: Array.from(dayMap.entries())
          .sort(([a], [b]) => b.localeCompare(a))
          .map(([dayKey, items]) => {
            const [, m, d] = dayKey.split("-").map(Number);
            return { dayKey, dayLabel: `${m}月${d}日`, items };
          }),
      };
    });
};
