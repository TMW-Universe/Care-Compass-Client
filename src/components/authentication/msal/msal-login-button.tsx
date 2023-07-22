import { useMsal } from "@azure/msal-react";
import { Button } from "antd";

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

  return <Button onClick={onClick}>Login</Button>;
}
