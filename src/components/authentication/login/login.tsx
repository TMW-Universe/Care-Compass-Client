import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";

export default function Login() {
  const { t } = useTranslation([Translations.login]);

  const { login } = useTmwuAuthentication();

  const log = async () => {
    const token = await login();
    console.log(token);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography>{t("Title")}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              log();
            }}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
