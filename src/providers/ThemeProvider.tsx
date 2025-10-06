import { type ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeProvider as SCThemeProvider, StyleSheetManager } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import rtlPlugin from "stylis-plugin-rtl";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useTranslation } from "react-i18next";

type Props = { children: ReactNode };

export function ThemeProvider({ children }: Props) {
  const initial = (localStorage.getItem("oasis-theme") || "dark") as "light" | "dark";
  const [mode, setMode] = useState<"light" | "dark">(initial);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => { localStorage.setItem("oasis-theme", mode); }, [mode]);

  const theme = mode === "dark" ? darkTheme : lightTheme;

  const stylisPlugins = useMemo(() => (isRTL ? [rtlPlugin] : []), [isRTL]);

  return (
    <StyleSheetManager stylisPlugins={stylisPlugins}>
      <SCThemeProvider theme={{ ...theme, mode, setMode }}>
        <GlobalStyles />
        {children}
      </SCThemeProvider>
    </StyleSheetManager>
  );
}
