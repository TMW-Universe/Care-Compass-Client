import { Route } from "./router";

const routes_definition: Route[] = [
  {
    path: "/",
    loader: () => import("../pages/main.page"),
  },
  {
    path: "/physical-stats",
    loader: () => import("../pages/stats/physical-stats.page"),
  },
];

export default routes_definition;
