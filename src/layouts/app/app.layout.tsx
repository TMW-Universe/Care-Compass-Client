import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import pj from "../../../package.json";
import styles from "./app.layout.module.css";
import { useTmwuAccounts } from "@tmw-universe/react-tmw-universe-authentication-utils";
import classNames from "classnames";
import AccountAvatar from "../../components/authentication/account/account-avatar";

type Props = {
  children: JSX.Element;
};

export default function AppLayout({ children }: Props) {
  const { activeAccount } = useTmwuAccounts();

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
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {pj.long_name}
            </Typography>
            <span className={classNames(["flex", "gap-2", "items-center"])}>
              <Typography>{activeAccount.name}</Typography>
              <AccountAvatar />
            </span>
          </Toolbar>
        </AppBar>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
