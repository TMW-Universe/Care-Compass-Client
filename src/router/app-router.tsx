// import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingRoute from "./loading-route";

// const LoginPage = lazy(() => import("../pages/login.page"));

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LoadingRoute>
          <p>aa</p>
        </LoadingRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
