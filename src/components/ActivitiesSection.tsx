import type { Activity } from "../hooks/useLaprasData";
import { useActivityFilter } from "../hooks/useActivityFilter";
import { ActivitySidePanel } from "./activities/ActivitySidePanel";
import { ActivityTimeline } from "./activities/ActivityTimeline";

interface ActivitiesSectionProps {
  activities: Activity[];
  loading: boolean;
  error: Error | null;
}

const ActivitiesSection = ({
  activities,
  loading,
  error,
}: ActivitiesSectionProps) => {
  const { filtered, activeTypes, toggle } = useActivityFilter(activities);

  return (
    <section id="activities" className="w-full">
      <div className="mb-8">
        <h2 className="secondary-title">アクティビティ</h2>
        <p className="section-paragraph">
          勉強会・技術記事・プルリクエストなど最近の活動
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* フィルターパネル: モバイルでは上部、デスクトップでは右 */}
        <div className="order-first lg:order-last lg:w-2/5 lg:flex-shrink-0">
          <ActivitySidePanel
            activities={activities}
            activeTypes={activeTypes}
            onToggle={toggle}
          />
        </div>
        {/* タイムライン: モバイルでは下部、デスクトップでは左 */}
        <div className="order-last min-w-0 flex-1 lg:order-first">
          <ActivityTimeline
            activities={filtered}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
