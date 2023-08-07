import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingRoute from "./loading-route";

const MainPage = lazy(() => import("../pages/main.page"));

export default function AppRouter() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainPage />,
      },
    ].map(({ element, ...extra }) => ({
      ...extra,
      element: <LoadingRoute>{element}</LoadingRoute>,
    }))
  );

  return <RouterProvider router={router} />;
}
