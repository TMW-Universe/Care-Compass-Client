import useRequest from "../../networking/use-request";
import { useQuery } from "@tanstack/react-query";

export function usePhysicalStatsQuery() {
  const { request } = useRequest();

  return useQuery({
    queryKey: ["physical-stats"],
    queryFn: async () => await request("/physical-stats"),
  });
}
