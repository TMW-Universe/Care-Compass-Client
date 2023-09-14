import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import LoginPage from "./pages/login.page";
import Router from "./router/router";
import routes_definition from "./router/routes-definition";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app/app.layout";
import UserPlatformSettingsProvider from "./providers/platform/user-platform-settings.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthenticatedTemplate>
          <UserPlatformSettingsProvider>
            <BrowserRouter>
              <AppLayout>
                <Router routes={routes_definition} />
              </AppLayout>
            </BrowserRouter>
          </UserPlatformSettingsProvider>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <LoginPage />
        </UnauthenticatedTemplate>
      </QueryClientProvider>
    </>
  );
}
