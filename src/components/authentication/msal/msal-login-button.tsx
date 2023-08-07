import { useMsal } from "@azure/msal-react";
import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function MsalLoginButton() {
  const { instance } = useMsal();

  const onClick = () => {
    instance
      .loginPopup({
        scopes: ["User.Read"],
        redirectUri: import.meta.env.BASE_URL,
      })
      .then((v) => {
        console.log(v);
      })
      .catch((e) => {
        console.error(e);
      });
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
