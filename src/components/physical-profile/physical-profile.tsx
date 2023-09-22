import classNames from "classnames";
import { Card, CardContent, IconButton } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";

export default function PhysicalProfile() {
  //const { data: stats, isLoading } = useLatestPhysicalStatsQuery();

  return (
    <>
      <div className={classNames("flex", "gap-6", "justify-center")}></div>
      <div>
        <Card>
          <CardContent className={classNames("flex", "items-center")}>
            <IconButton>
              <EditOutlined />
            </IconButton>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
