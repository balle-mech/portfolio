import type { Activity } from "../../hooks/useLaprasData";

const BADGE_CONFIG: Record<
  Activity["type"],
  { icon: string; label: string; bg: string; text: string }
> = {
  github_pr: {
    icon: "fa-solid fa-code-pull-request",
    label: "Pull Request",
    bg: "bg-blue-950",
    text: "text-blue-400",
  },
  connpass: {
    icon: "fa-solid fa-calendar-days",
    label: "イベント",
    bg: "bg-violet-950",
    text: "text-violet-400",
  },
  github: {
    icon: "fa-brands fa-github",
    label: "GitHub",
    bg: "bg-neutral-800",
    text: "text-gray-400",
  },
  qiita: {
    icon: "fa-solid fa-file-code",
    label: "Qiita",
    bg: "bg-green-950",
    text: "text-green-400",
  },
  zenn: {
    icon: "fa-solid fa-book-open",
    label: "Zenn",
    bg: "bg-sky-950",
    text: "text-sky-400",
  },
};

interface ActivityBadgeProps {
  type: Activity["type"];
}

export const ActivityBadge = ({ type }: ActivityBadgeProps) => {
  const { icon, label, bg, text } = BADGE_CONFIG[type];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[11px] font-semibold ${bg} ${text}`}
    >
      <i className={`${icon} text-[10px]`} />
      {label}
    </span>
  );
};
