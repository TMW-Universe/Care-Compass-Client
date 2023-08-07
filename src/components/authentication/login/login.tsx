import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import MsalLoginButton from "../msal/msal-login-button";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

export default function Login() {
  const { t } = useTranslation([Translations.login]);

  return (
    <>
      <Card>
        <CardContent>
          <Typography>{t("Title")}</Typography>
        </CardContent>
        <CardActions>
          <MsalLoginButton />
        </CardActions>
      </Card>
    </>
  );
}
