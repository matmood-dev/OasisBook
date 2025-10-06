import { type ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeProvider as SCThemeProvider, StyleSheetManager } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import rtlPlugin from "stylis-plugin-rtl";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useTranslation } from "react-i18next";

type Props = { children: ReactNode };
type Mode = "light" | "dark";

export function ThemeProvider({ children }: Props) {
  const initial = (localStorage.getItem("oasis-theme") || "dark") as Mode;
  const [mode, setMode] = useState<Mode>(initial);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => { localStorage.setItem("oasis-theme", mode); }, [mode]);

  const base = mode === "dark" ? darkTheme : lightTheme;

  const extendedTheme = useMemo(
    () => ({
      ...base,
      mode,
      setMode: (m: Mode) => setMode(m),
    }),
    [base, mode]
  );

  const stylisPlugins = useMemo(() => (isRTL ? [rtlPlugin] : []), [isRTL]);

  return (
    <StyleSheetManager stylisPlugins={stylisPlugins}>
      <SCThemeProvider theme={extendedTheme}>
        <GlobalStyles />
        {children}
      </SCThemeProvider>
    </StyleSheetManager>
  );
}
