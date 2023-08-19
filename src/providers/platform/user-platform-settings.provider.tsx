import { createContext, useContext, useState } from "react";
import { WeightUnits } from "../../types/units/weight.enum";

export interface UserPlatformSettings {
  weightUnits: WeightUnits;
}

type UserPlatformSettingsType = {
  userPlatformSettings: UserPlatformSettings;
  setUserPlatformSettings: (userPlatformSettings: UserPlatformSettings) => void;
};

const UserPlatformSettingsContext =
  createContext<UserPlatformSettingsType | null>(null);

type Props = {
  children: JSX.Element;
};

export default function UserPlatformSettingsProvider({ children }: Props) {
  const [state, setState] = useState<UserPlatformSettings>();

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
