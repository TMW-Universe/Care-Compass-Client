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

export default function App() {
  return (
    <>
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
    </>
  );
}
