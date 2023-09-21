type Route = (params: never) => string;

export const routes = {
  MAIN_PAGE: () => "/",
  // Stats
  PHYSICAL_STATS: () => "/physical-stats",
} satisfies Record<string, Route>;
