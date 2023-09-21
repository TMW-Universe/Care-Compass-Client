import classNames from "classnames";
import Weight from "../common/renderers/values/weight";
import PhysicalStatsCard from "./physical-stats-card";
import Height from "../common/renderers/values/height";
import { HeightOutlined, MonitorWeight } from "@mui/icons-material";

export default function PhysicalStats() {
  return (
    <>
      <div className={classNames("flex", "gap-6", "justify-center")}>
        <PhysicalStatsCard
          icon={<MonitorWeight />}
          itemKey="weight"
          value={<Weight weight={70} />}
        />
        <PhysicalStatsCard
          icon={<HeightOutlined />}
          itemKey="height"
          value={<Height height={172} />}
        />
      </div>
    </>
  );
}
