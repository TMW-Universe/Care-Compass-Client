import { Route } from "./router";
import { routes } from "./routes";

const routes_definition: Route[] = [
  {
    path: routes.MAIN_PAGE(),
    loader: () => import("../pages/main.page"),
  },
  {
    path: routes.PHYSICAL_STATS(),
    loader: () => import("../pages/stats/physical-stats.page"),
  },
];

export default routes_definition;
