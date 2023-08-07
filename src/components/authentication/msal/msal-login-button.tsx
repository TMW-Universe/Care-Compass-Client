import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";

export default function MsalLoginButton() {
  const { login } = useTmwuAuthentication({
    redirectUri: import.meta.env.BASE_URL,
  });

  const onClick = () => {
    login();
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
