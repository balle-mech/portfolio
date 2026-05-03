import { useMemo, useState } from "react";
import type { Activity } from "./useLaprasData";

const ALL_TYPES: Activity["type"][] = [
  "connpass",
  "github",
  "github_pr",
  "qiita",
  "zenn",
];

export const useActivityFilter = (activities: Activity[]) => {
  const [activeTypes, setActiveTypes] = useState<Set<Activity["type"]>>(
    new Set(ALL_TYPES)
  );

  const toggle = (type: Activity["type"]) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        if (next.size > 1) next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const filtered = useMemo(
    () => activities.filter((a) => activeTypes.has(a.type)),
    [activities, activeTypes]
  );

  return { filtered, activeTypes, toggle };
};
