// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationEN from "./locales/en/translation.json";
import translationTH from "./locales/th/translation.json";

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  th: {
    translation: translationTH,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    // lng: navigator.language || "en", // Default language
    lng: localStorage.getItem("lang") || "th",
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;

