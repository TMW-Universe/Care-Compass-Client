import { createContext, useContext, useEffect, useState } from "react";
import { WeightUnits } from "../../types/units/weight.enum";
import { useMyPlatformSettingsQuery } from "../../hooks/api/platform/settings/use-my-platform-settings.query";

export interface UserPlatformSettings {
  weightUnits: WeightUnits;
}

type UserPlatformSettingsType = {
  userPlatformSettings: UserPlatformSettings;
  setUserPlatformSettings: (userPlatformSettings: UserPlatformSettings) => void;
};

const UserPlatformSettingsContext =
  createContext<UserPlatformSettingsType | null>(null);

const DEFAULT_USER_PLATFORM_SETTINGS: UserPlatformSettings = { weightUnits: WeightUnits.kilograms };

type Props = {
  children: JSX.Element;
};

export default function UserPlatformSettingsProvider({ children }: Props) {
  const [state, setState] = useState<UserPlatformSettings>();
  const { isFetching, data } = useMyPlatformSettingsQuery();

  useEffect(() => {
    if (!data) return;
    if (state !== data?.data) {
      // Update remote config
    }
  }, [state]);

  useEffect(() => {
    if (data?.data && !isFetching) setState(data.data);
    else setState(DEFAULT_USER_PLATFORM_SETTINGS);
  }, [data?.data]);

  if (!state) return <></>;

  return (
    <UserPlatformSettingsContext.Provider
      value={{
        userPlatformSettings: state,
        setUserPlatformSettings: setState,
      }}
    >
      {children}
    </UserPlatformSettingsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserPlatformSettings() {
  const context = useContext(UserPlatformSettingsContext);

  if (!context) throw new Error("User platform provider not initializated");

  return context;
}
