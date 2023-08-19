import { HomeOutlined, MonitorWeightOutlined } from "@mui/icons-material";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/routes";

type MenuItemType =
  | {
      type: "divider";
    }
  | {
      type: "item";
      key: string;
      icon: JSX.Element;
      onClick:
        | {
            type: "route";
            route: string;
          }
        | {
            type: "event";
            onClick: () => void;
          };
    };

type Props = {
  onClose: () => void;
};

export default function SideMenu({ onClose }: Props) {
  const { t } = useTranslation([Translations.layout]);
  const navigate = useNavigate();

  const items: MenuItemType[] = [
    {
      type: "item",
      key: "main-page",
      icon: <HomeOutlined />,
      onClick: {
        type: "route",
        route: routes.MAIN_PAGE(),
      },
    },
    {
      type: "divider",
    },
    {
      type: "item",
      key: "weight-monitor",
      icon: <MonitorWeightOutlined />,
      onClick: {
        type: "route",
        route: routes.WEIGHT_MONITOR(),
      },
    },
  ];

  return (
    <MenuList>
      {items.map((item, i) => {
        if (item.type === "divider") return <Divider key={i} />;

        return (
          <MenuItem
            key={item.key}
            onClick={() => {
              if (item.onClick.type === "route") {
                navigate(item.onClick.route);
                onClose();
              } else item.onClick.onClick();
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              {t(`side-menu.menu.items.${item.key}.Label`)}
            </ListItemText>
          </MenuItem>
        );
      })}
    </MenuList>
  );
}
