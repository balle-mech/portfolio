import { useEffect, useState } from "react";
import type { Activity } from "./useLaprasData";

const INITIAL_COUNT = 6;
const PAGE_SIZE = 5;

export const useActivityPagination = (activities: Activity[]) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // フィルター変更時にリセット
  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [activities]);

  const visible = activities.slice(0, visibleCount);
  const hasMore = visible.length < activities.length;
  const remaining = Math.max(0, activities.length - visible.length);
  const loadMore = () => setVisibleCount((prev) => prev + PAGE_SIZE);

  return { visible, hasMore, remaining, loadMore };
};
