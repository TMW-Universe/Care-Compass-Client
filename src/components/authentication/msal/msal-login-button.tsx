import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";
import constants from "../../../config/constants";

export default function MsalLoginButton() {
  const { login } = useTmwuAuthentication();

  const onClick = async () => {
    await login(constants.msal.loginConfig);
  };

  return (
    <Button
      startIcon={<LoginOutlined />}
      onClick={onClick}
      variant="contained"
      className="w-full"
    >
      Login
    </Button>
  );
}
