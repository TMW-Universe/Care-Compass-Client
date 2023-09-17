import TmwuAuthProvider from "@tmw-universe/react-tmw-universe-authentication-utils/dist/providers/tmwu-auth.provider";
import constants from "../../config/constants";
import { useTranslation } from "react-i18next";

type Props = {
  children: JSX.Element;
};

export default function AuthProvider({ children }: Props) {
  const { i18n } = useTranslation();

  return (
    <TmwuAuthProvider
      options={{
        authClient: constants.auth.authClientHost,
        authHost: constants.auth.authApiHost,
        onAccountChange(account) {
          // When account changes, change also language
          if (account && account.preferences?.language) {
            i18n.changeLanguage(account.preferences.language);
          }
        },
      }}
    >
      {children}
    </TmwuAuthProvider>
  );
}
