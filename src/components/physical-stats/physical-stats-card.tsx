import { Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "../../i18n/translations.enum";
import styles from "./physical-stats-card.module.css";

type Props = {
  itemKey: string;
  value: JSX.Element;
  icon: JSX.Element;
};

export default function PhysicalStatsCard({ itemKey, value, icon }: Props) {
  const { t } = useTranslation([Translations.physicalStats]);

  return (
    <Card key={itemKey}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {icon} {t(`physical-stats-cards.cards.${itemKey}.Title`)}
        </Typography>
        <Typography className={styles.value} component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
