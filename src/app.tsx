import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import AppRouter from "./router/app-router";
import LoginPage from "./pages/login.page";
import AppLayout from "./layouts/app/app.layout";

export default function App() {
  return (
    <>
      <AuthenticatedTemplate>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginPage />
      </UnauthenticatedTemplate>
    </>
  );
}
