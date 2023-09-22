import useRequest from "../../networking/use-request";
import { useQuery } from "@tanstack/react-query";

export function useMyPhysicalProfileQuery() {
  const { request } = useRequest();

  return useQuery({
    queryKey: ["physical-profile"],
    queryFn: async () =>
      (await request<StatsResponse>("physical-profile"))?.data,
  });
}

interface StatsResponse {
  weight?: number;
  height?: number;
}
