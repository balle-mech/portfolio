import { useMemo } from "react";
import type { Activity } from "../../hooks/useLaprasData";
import { ActivityBadge } from "./ActivityBadge";

const ALL_TYPES: Activity["type"][] = [
  "github_pr",
  "connpass",
  "qiita",
  "zenn",
  "github",
];

interface ActivitySidePanelProps {
  activities: Activity[];
  activeTypes: Set<Activity["type"]>;
  onToggle: (type: Activity["type"]) => void;
}

export const ActivitySidePanel = ({
  activities,
  activeTypes,
  onToggle,
}: ActivitySidePanelProps) => {
  const counts = useMemo(() => {
    const map: Partial<Record<Activity["type"], number>> = {};
    for (const a of activities) {
      map[a.type] = (map[a.type] ?? 0) + 1;
    }
    return map;
  }, [activities]);

  return (
    <div className="sticky top-6 rounded-[10px] border border-white/8 bg-surface-1 p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">フィルター</h3>
      <div className="space-y-2">
        {ALL_TYPES.map((type) => {
          const count = counts[type] ?? 0;
          if (count === 0) return null;
          const isActive = activeTypes.has(type);
          return (
            <button
              key={type}
              onClick={() => onToggle(type)}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors duration-150 hover:bg-white/5 ${
                isActive ? "opacity-100" : "opacity-40"
              }`}
            >
              <ActivityBadge type={type} />
              <span className="text-xs text-gray-500">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
