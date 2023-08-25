import { useQuery } from "@tanstack/react-query";
import { UserPlatformSettings } from "../../../../providers/platform/user-platform-settings.provider";
import useRequest from "../../../networking/use-request";

export function useMyPlatformSettingsQuery() {

    const { request } = useRequest();

    return useQuery({
        queryFn: async () => await request<UserPlatformSettings | null>('platform/my-settings'),
        queryKey: ['platform', 'my-settings']
    });
}