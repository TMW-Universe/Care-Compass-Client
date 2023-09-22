type Route = (params: never) => string;

export const routes = {
  MAIN_PAGE: () => "/",
  // Profile
  PHYSICAL_PROFILE: () => "/physical-profile",
} satisfies Record<string, Route>;
