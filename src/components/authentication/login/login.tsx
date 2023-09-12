import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function Login() {
  const { t } = useTranslation([Translations.login]);

  const login = async () => {
    const popup = window.open(
      "http://localhost:8002/third-party/authenticate/v1/manga%2Etmwcenter%2Ecom",
      "Popup",
      "toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=0,width=600,height=800,left=800,top=500"
    );
    popup?.focus();
    const checkPopup = setInterval(() => {
      if (popup?.window.location.href.includes("accessToken")) {
        console.log(popup.window.location.href);
        popup.close();
      }
      if (!popup || !popup?.closed) return;
      clearInterval(checkPopup);
    }, 1000);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography>{t("Title")}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={login}>Login</Button>
        </CardActions>
      </Card>
    </>
  );
}
