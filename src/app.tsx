import LoginPage from "./pages/login.page";
import Router from "./router/router";
import routes_definition from "./router/routes-definition";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app/app.layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/authenticated";
import NotAuthenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/not-authenticated";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Authenticated>
          <BrowserRouter>
            <AppLayout>
              <Router routes={routes_definition} />
            </AppLayout>
          </BrowserRouter>
        </Authenticated>
        <NotAuthenticated>
          <LoginPage />
        </NotAuthenticated>
      </QueryClientProvider>
    </>
  );
}
