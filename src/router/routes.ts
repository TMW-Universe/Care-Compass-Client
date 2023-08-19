type Route = (params: never) => string;

export const routes = {
  MAIN_PAGE: () => "/",
  WEIGHT_MONITOR: () => "/weight-monitor",
} satisfies Record<string, Route>;
