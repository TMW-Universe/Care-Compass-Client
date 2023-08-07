import { Menu } from "@mui/icons-material";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import pj from "../../../package.json";
import styles from "./app.layout.module.css";

type Props = {
  children: JSX.Element;
};

export default function AppLayout({ children }: Props) {
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
            <Avatar alt="User avatar" />
          </Toolbar>
        </AppBar>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
