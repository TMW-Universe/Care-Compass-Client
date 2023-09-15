import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { i18nsetup } from "./i18n/i18n.setup.ts";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./reset.css";
import "./index.css";
import TmwuAuthProvider from "@tmw-universe/react-tmw-universe-authentication-utils/dist/providers/tmwu-auth.provider";

i18nsetup();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TmwuAuthProvider
      options={{
        authHost: "http://localhost:8002",
      }}
    >
      <App />
    </TmwuAuthProvider>
  </React.StrictMode>
);
