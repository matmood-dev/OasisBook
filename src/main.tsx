import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LocaleProvider } from "./providers/LocaleProvider";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocaleProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </LocaleProvider>
  </React.StrictMode>
);
