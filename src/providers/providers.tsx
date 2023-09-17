import AuthProvider from "./auth/auth.provider";

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
