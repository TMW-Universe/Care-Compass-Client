import { Card } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import MsalLoginButton from "../msal/msal-login-button";

export default function Login() {
  const { t } = useTranslation([Translations.login]);

  return (
    <>
      <Card title={t("Title")}>
        <MsalLoginButton />
      </Card>
    </>
  );
}
