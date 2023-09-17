import { deepPurple } from "@mui/material/colors";
import {
  ThemeProvider as MaterialThemeProvider,
  THEME_ID,
  createTheme,
} from "@mui/material/styles";
import { useTwmuAccount } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Theme } from "@tmw-universe/tmw-universe-types";

type Props = {
  children: JSX.Element;
};

export default function ThemeProvider({ children }: Props) {
  const {
    account: { preferences },
  } = useTwmuAccount();

  const materialTheme = createTheme({
    palette: {
      primary: {
        main: preferences?.color ?? deepPurple[700],
      },
      mode: preferences?.theme === Theme.DARK ? "dark" : "light",
    },
  });

  return (
    <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
      {children}
    </MaterialThemeProvider>
  );
}
