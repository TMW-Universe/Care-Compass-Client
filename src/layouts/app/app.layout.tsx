import { Menu } from "@mui/icons-material";
import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import pj from "../../../package.json";
import styles from "./app.layout.module.css";
import { useTmwuAccounts } from "@tmw-universe/react-tmw-universe-authentication-utils";
import classNames from "classnames";
import AccountAvatarMenu from "../../components/authentication/account/account-avatar-menu";
import { useState } from "react";
import SideMenu from "../../components/layout/side-menu/side-menu";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";

type Props = {
  children: JSX.Element;
};

export default function AppLayout({ children }: Props) {
  const { activeAccount } = useTmwuAccounts();
  const navigate = useNavigate();

  const [isSideMenuVisible, setSideMenuVisibility] = useState(false);

  return (
    <div className={styles.layout}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setSideMenuVisibility(true)}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate(routes.MAIN_PAGE())}
            >
              {pj.long_name}
            </Typography>
            <span className={classNames(["flex", "gap-2", "items-center"])}>
              <Typography>{activeAccount.name}</Typography>
              <AccountAvatarMenu />
            </span>
          </Toolbar>
        </AppBar>
      </div>
      <div className={styles.body}>{children}</div>

      <Drawer
        open={isSideMenuVisible}
        onClose={() => setSideMenuVisibility(false)}
      >
        <SideMenu onClose={() => setSideMenuVisibility(false)} />
      </Drawer>
    </div>
  );
}
