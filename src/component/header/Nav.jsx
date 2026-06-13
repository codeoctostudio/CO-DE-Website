"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

// 🌟 อิมพอร์ตพจนานุกรม และ รูปภาพให้ถูกต้องตามสถาปัตยกรรม
import { getDictionary } from "@/lib/dictionary";
import img1 from "@/assets/others/thaiflag.webp";
import img2 from "@/assets/others/ukflag.webp";

const Nav = (props) => {
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

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex h-[370px] flex-col rounded-b-[20px] bg-[#00B0E6] py-4 pl-10 pt-[80px] transition-transform duration-500 md:hidden ${
          props.isVisible ? "translate-y-0" : "-translate-y-[500px]"
        }`}
      >
        <Link
          href={langPath("/courses")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle}
        >
          {dict.courses}
        </Link>
        <Link
          href={langPath("/playground")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle}
        >
          {dict.playground}
        </Link>
        <Link
          href={langPath("/blogs")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle}
        >
          {dict.trends}
        </Link>
        <Link
          href={langPath("/contactUs")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle}
        >
          {dict.contact}
        </Link>

        <div className="flex items-center gap-4 ml-3 mt-2">
          {/* TH Flag */}
          <button
            onClick={() => setLanguage("th")}
            className={`relative h-[24px] w-[34px] rounded-md overflow-hidden transition ${
              currentLang === "th"
                ? "border-2 border-white bg-white/20"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={img1} alt="TH" fill className="object-cover" />
          </button>

          {/* EN Flag */}
          <button
            onClick={() => setLanguage("en")}
            className={`relative h-[24px] w-[34px] rounded-md overflow-hidden transition ${
              currentLang === "en"
                ? "border-2 border-white bg-white/20"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={img2} alt="EN" fill className="object-cover" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
