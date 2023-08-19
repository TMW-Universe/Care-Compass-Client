import { Route } from "./router";

const routes_definition: Route[] = [
  {
    path: "/",
    loader: () => import("../pages/main.page"),
  },
  {
    path: "/weight-monitor",
    loader: () => import("../pages/weight/weight-monitor.page"),
  },
];

export default routes_definition;
