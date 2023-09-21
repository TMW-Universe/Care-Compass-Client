import classNames from "classnames";
import Weight from "../common/renderers/values/weight";
import PhysicalStatsCard from "./physical-stats-card";
import Height from "../common/renderers/values/height";
import { usePhysicalStatsQuery } from "../../hooks/api/physical-stats/use-physical-stats.query";

export default function PhysicalStats() {
  const { data: stats, isLoading } = usePhysicalStatsQuery();

  return (
    <>
      <div className={classNames("flex", "gap-6", "justify-center")}>
        <PhysicalStatsCard
          itemKey="weight"
          value={<Weight weight={stats?.weight ?? 0} />}
          loading={isLoading}
        />
        <PhysicalStatsCard
          itemKey="height"
          value={<Height height={stats?.height ?? 0} />}
          loading={isLoading}
        />
      </div>
    </>
  );
}
