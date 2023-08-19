import Weight from "../common/renderers/values/weight";
import PhysicalStatsCard from "./physical-stats-card";

export default function PhysicalStats() {
  return (
    <>
      <PhysicalStatsCard itemKey="weight" value={<Weight weight={70} />} />
    </>
  );
}
