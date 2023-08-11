import { LogoutOutlined } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";

export default function AccountAvatar() {
  const { logout } = useTmwuAuthentication();

  const [avatarElement, setAvatarElement] = useState<
    (HTMLButtonElement & EventTarget) | null
  >(null);

  const { t } = useTranslation([Translations.common]);

  return (
    <>
      <IconButton onClick={(e) => setAvatarElement(e.currentTarget)}>
        <Avatar alt="User avatar" />
      </IconButton>
      <Menu
        anchorEl={avatarElement}
        open={!!avatarElement}
        onClose={() => setAvatarElement(null)}
      >
        <MenuItem>
          <ListItemIcon onClick={() => logout()}>
            <LogoutOutlined />
          </ListItemIcon>
          <Typography>{t("user.avatar.actions.logout.Text")}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
