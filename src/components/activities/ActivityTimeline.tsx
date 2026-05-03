import type { Activity } from "../../hooks/useLaprasData";
import { useActivityPagination } from "../../hooks/useActivityPagination";
import { groupActivitiesByMonth } from "../../utils/activityGroups";
import { ActivityCard } from "./ActivityCard";

interface ActivityTimelineProps {
  activities: Activity[];
  loading: boolean;
  error: Error | null;
}

export const ActivityTimeline = ({
  activities,
  loading,
  error,
}: ActivityTimelineProps) => {
  const { visible, hasMore, remaining, loadMore } =
    useActivityPagination(activities);

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-[10px] border border-white/8 bg-surface-1"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-secondary text-sm">
        アクティビティの取得に失敗しました。
      </p>
    );
  }

  const groups = groupActivitiesByMonth(visible);

  if (groups.length === 0) {
    return (
      <p className="text-secondary text-sm">アクティビティがありません。</p>
    );
  }

  return (
    <div className="space-y-8">
      {groups.map((month) => (
        <div key={month.monthKey}>
          <div className="sticky top-0 z-10 -mx-1 bg-body px-1 py-2 text-sm font-semibold text-secondary">
            {month.monthLabel}
          </div>
          <div className="mt-3 space-y-6">
            {month.days.map((day) => (
              <div key={day.dayKey} className="flex gap-3">
                <div className="w-12 flex-shrink-0 pt-1 text-right text-xs text-gray-500">
                  {day.dayLabel}
                </div>
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/15" />
                  <div className="mt-1 w-px flex-1 bg-white/8" />
                </div>
                <div className="min-w-0 flex-1 space-y-3 pb-4">
                  {day.items.map((activity, i) => (
                    <ActivityCard key={i} activity={activity} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {hasMore && (
        <button
          onClick={loadMore}
          className="w-full rounded-[10px] border border-white/8 bg-surface-1 py-3 text-sm text-secondary transition-colors duration-150 hover:border-white/15 hover:text-white"
        >
          さらに表示（残り {remaining} 件）
        </button>
      )}
    </div>
  );
};
