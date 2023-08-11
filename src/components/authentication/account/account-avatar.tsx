import { AccountInfo } from "@azure/msal-browser";
import { Avatar } from "@mui/material";

type Props = {
  account: AccountInfo;
};

export default function AccountAvatar({ account }: Props) {
  return <Avatar alt={`Account info, ${account.username}`} />;
}
