import TmwuAuthProvider from "@tmw-universe/react-tmw-universe-authentication-utils/dist/providers/tmwu-auth.provider";
import constants from "../../config/constants";

type Props = {
  children: JSX.Element;
};

export default function AuthProvider({ children }: Props) {
  return (
    <TmwuAuthProvider
      options={{
        authClient: constants.auth.authClientHost,
        authHost: constants.auth.authApiHost,
      }}
    >
      {children}
    </TmwuAuthProvider>
  );
}
