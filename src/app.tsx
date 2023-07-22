import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import AppRouter from "./router/app-router";
import LoginPage from "./pages/login.page";

export default function App() {
  return (
    <>
      <AuthenticatedTemplate>
        <AppRouter />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginPage />
      </UnauthenticatedTemplate>
    </>
  );
}
