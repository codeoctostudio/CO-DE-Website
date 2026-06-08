"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
    const newPathname = segments.join("/");

    const currentQueries = searchParams?.toString();
    const finalUrl = currentQueries ? `${newPathname}?${currentQueries}` : newPathname;
    router.push(finalUrl);
  };

  return {
    lang,
    dict,
    currentLang,
    langPath,
    setLanguage,
    pathname,
    router,
    searchParams
  };
};

// const setLanguage = (newLang) => {
//   if (newLang === lang) return;

//   fetch("/api/set-language", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ lang: newLang }),
//   });

//   const segments = pathname.split("/");
//   segments[1] = newLang;
//   const newPathname = segments.join("/");

//   // 🌟 ป้องกันขั้นสุด: เช็กให้ชัวร์ว่า searchParams มีอยู่จริงและแปลงเป็น string ได้ ไม่ใช่ Object เปล่าๆ
//   const currentQueries = searchParams ? searchParams.toString() : "";
  
//   // ถ้า currentQueries ดันหลุดคำว่า "[object" มา ให้ตัดทิ้งไปเลย
//   const safeQueries = (currentQueries && !currentQueries.includes("[object")) ? currentQueries : "";

//   const finalUrl = safeQueries ? `${newPathname}?${safeQueries}` : newPathname;

//   router.push(finalUrl);
// };