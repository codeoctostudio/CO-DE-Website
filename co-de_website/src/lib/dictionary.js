// src/lib/dictionary.js

import th from "@/locales/th/translation.json";
import en from "@/locales/en/translation.json";

const dictionaries = {
  th,
  en,
};

export function getDictionary(lang) {
  return dictionaries[lang] || dictionaries.th;
}