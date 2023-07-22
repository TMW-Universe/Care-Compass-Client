import { Card, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import MsalLoginButton from "../msal/msal-login-button";

const { Title } = Typography;

export default function Login() {
  const { t } = useTranslation([Translations.login]);

  return (
    <>
      <Card>
        <Space direction="vertical">
          <Title level={4}>{t("Title")}</Title>
          <MsalLoginButton />
        </Space>
      </Card>
    </>
  );
}
