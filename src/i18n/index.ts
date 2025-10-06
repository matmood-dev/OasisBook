import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en.json";
import ar from "./resources/ar.json";

export type Lang = "en" | "ar";

const saved = (localStorage.getItem("oasis-lang") as Lang) || "en";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: saved,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

// Keep <html dir> synced
const dir = (l: Lang) => (l === "ar" ? "rtl" : "ltr");
document.documentElement.lang = saved;
document.documentElement.dir = dir(saved);

export const setDocumentDir = (lng: Lang) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = dir(lng);
  localStorage.setItem("oasis-lang", lng);
};

export default i18n;
