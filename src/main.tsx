import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./config/msal/msal.config.ts";
import { PublicClientApplication } from "@azure/msal-browser";
import { i18nsetup } from "./i18n/i18n.setup.ts";
import { ConfigProvider } from "antd";
import "./reset.css";
import "./index.css";

const msalInstance = new PublicClientApplication(msalConfig);
i18nsetup();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </ConfigProvider>
  </React.StrictMode>
);
