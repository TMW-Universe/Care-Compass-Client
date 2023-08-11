import { AddOutlined, LogoutOutlined } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import {
  useTmwuAccounts,
  useTmwuAuthentication,
} from "@tmw-universe/react-tmw-universe-authentication-utils";
import AccountAvatar from "./account-avatar";
import constants from "../../../config/constants";

export default function AccountAvatarMenu() {
  const { logout, login } = useTmwuAuthentication();
  const { inactiveAccounts, activeAccount } = useTmwuAccounts();

  const [avatarElement, setAvatarElement] = useState<
    (HTMLButtonElement & EventTarget) | null
  >(null);

  const { t } = useTranslation([Translations.common]);

  const addAccount = async () => await login(constants.msal.loginConfig);

  return (
    <>
      <IconButton onClick={(e) => setAvatarElement(e.currentTarget)}>
        <AccountAvatar account={activeAccount} />
      </IconButton>
      <Menu
        anchorEl={avatarElement}
        open={!!avatarElement}
        onClose={() => setAvatarElement(null)}
      >
        {inactiveAccounts.map((account) => (
          <MenuItem>
            <AccountAvatar account={account} />
            <Typography>{account.name || account.username}</Typography>
          </MenuItem>
        ))}
        {inactiveAccounts.length > 0 ? <Divider /> : null}
        <MenuItem onClick={() => logout()}>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <Typography>{t("user.avatar.actions.logout.Text")}</Typography>
        </MenuItem>
        <MenuItem onClick={() => addAccount()} disabled>
          <ListItemIcon>
            <AddOutlined />
          </ListItemIcon>
          <Typography>{t("user.avatar.actions.add-account.Text")}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
