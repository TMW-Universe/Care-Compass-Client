import { MonitorWeightOutlined } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/routes";

export default function SideMenu() {
  const { t } = useTranslation([Translations.layout]);
  const navigate = useNavigate();

  return (
    <MenuList>
      <MenuItem onClick={() => navigate(routes.WEIGHT_MONITOR())}>
        <ListItemIcon>
          <MonitorWeightOutlined />
        </ListItemIcon>
        <ListItemText>
          {t("side-menu.menu.items.weight-monitor.Label")}
        </ListItemText>
      </MenuItem>
    </MenuList>
  );
}
