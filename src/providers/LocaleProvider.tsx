import { type ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { setDocumentDir } from "../i18n";

export function useLocale() {
  const { i18n } = useTranslation();
  const setLang = useCallback((lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
    setDocumentDir(lng);
  }, [i18n]);
  return { lang: i18n.language as "en" | "ar", setLang, isRTL: i18n.language === "ar" };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
