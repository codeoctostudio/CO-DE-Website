"use client";

import { usePathname, useRouter } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "th";
  const dict = getDictionary(lang);
  const currentLang = lang;
  const langPath = (path) => {
    return `/${lang}${path}`;
  };
  const setLanguage = (newLang) => {
    if (newLang === lang) return;

    fetch("/api/set-language", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lang: newLang }),
    });

    const segments = pathname.split("/");
    segments[1] = newLang;

    router.push(segments.join("/"));
  };
  return {
    lang,
    dict,
    currentLang,
    langPath,
    setLanguage,
    pathname,
    router
  };
};
