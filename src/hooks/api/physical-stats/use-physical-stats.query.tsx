import useRequest from "../../networking/use-request";
import { useQuery } from "@tanstack/react-query";

export function usePhysicalStatsQuery() {
  const { request } = useRequest();

  return useQuery({
    queryKey: ["metrics", "all"],
    queryFn: async () => (await request<StatsResponse>("metrics/all"))?.data,
  });
}

interface StatsResponse {
  weight?: number;
  height?: number;
}
