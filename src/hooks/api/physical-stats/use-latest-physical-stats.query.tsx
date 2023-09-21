import useRequest from "../../networking/use-request";
import { useQuery } from "@tanstack/react-query";

export function useLatestPhysicalStatsQuery() {
  const { request } = useRequest();

  return useQuery({
    queryKey: ["metrics", "latest"],
    queryFn: async () => (await request<StatsResponse>("metrics/latest"))?.data,
  });
}

interface StatsResponse {
  weight?: number;
  height?: number;
}
