import type { Activity } from "../../hooks/useLaprasData";
import { ActivityBadge } from "./ActivityBadge";

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <a
      href={activity.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-3 rounded-[10px] border border-white/8 bg-surface-1 px-5 py-4 transition-colors duration-150 hover:border-white/15 hover:bg-surface-2"
    >
      <div className="flex min-w-0 flex-col gap-2">
        <ActivityBadge type={activity.type} />
        <p className="line-clamp-2 text-sm leading-relaxed text-white">
          {activity.title}
        </p>
      </div>
      <i className="fa-solid fa-arrow-up-right-from-square mt-1 flex-shrink-0 text-xs text-gray-600 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
    </a>
  );
};
