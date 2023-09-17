import AuthProvider from "./auth/auth.provider";
import ThemeProvider from "./theme/theme.provider";

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
}
