// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationTH from "./locales/th/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  th: {
    translation: translationTH,
  },
};

const savedLang =
  typeof window !== "undefined"
    ? localStorage.getItem("lang")
    : "th";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || "th",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;