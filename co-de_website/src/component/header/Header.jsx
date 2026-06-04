"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hook/useLanguage";

import code_logo from "@/assets/others/code_logo.webp";
import nav_logo from "@/assets/others/nav.webp";
import thflag from "@/assets/others/thaiflag.webp";
import ukflag from "@/assets/others/ukflag.webp";

const Header = ({ toggle, rewardRef }) => {
  const { lang, dict, currentLang, langPath, setLanguage, pathname, router } = useLanguage();

  const [hideFreeTrial, setHideFreeTrial] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("translate-y-0");
  const [isScrolled, setIsScrolled] = useState(false);

  const isTrialPage = pathname === langPath("/trialclass");
  const isRegistrationPage = pathname === langPath("/registration");

  const scrollToEmail = () => {
    router.push(langPath("/trialclass"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        setHeaderStyle("md:-translate-y-[120px]");
        setIsScrolled(true);
      } else {
        setHeaderStyle("md:translate-y-0");
        setIsScrolled(false);
      }

      if (!rewardRef?.current) return;

      const rect = rewardRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHideFreeTrial(true);
      } else {
        setHideFreeTrial(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rewardRef]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[9999] flex h-[80px] items-center justify-between bg-[#29446A] px-6 shadow-lg transition duration-500 md:left-12 md:right-12 md:h-[90px] md:rounded-b-[60px] ${headerStyle}`}
      >
        {/* Logo */}
        <Link href={`/${lang}`}>
          <Image
            src={code_logo}
            alt="CO-DE"
            priority
            className="relative right-10 h-[120px] w-[120px] object-contain md:right-14 md:h-[170px] md:w-[170px]"
          />
        </Link>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          {isScrolled &&
            !isTrialPage &&
            !isRegistrationPage &&
            !hideFreeTrial && (
              <button
                onClick={scrollToEmail}
                className="rounded-full bg-[#F7C94B] px-3 py-1.5 text-xs font-semibold text-[#042451] transition hover:opacity-80"
              >
                {dict.freetrial}
              </button>
            )}

          <Image
            src={nav_logo}
            alt="menu"
            priority
            onClick={toggle}
            className="h-[36px] w-[36px] cursor-pointer object-contain transition hover:opacity-90"
          />
        </div>

        {/* Desktop Menu */}
        <div className="relative hidden w-[90%] items-center gap-[1%] md:ml-[-40px] md:flex md:text-[1.45vw] lg:text-[1.2vw]">
          <Link
            href={langPath("/courses")}
            className="flex-grow font-comfortaa text-white transition hover:opacity-80"
          >
            {dict.courses}
          </Link>

          <Link
            href={langPath("/playground")}
            className="flex-grow font-comfortaa text-white transition hover:opacity-80"
          >
            {dict.playground}
          </Link>

          <Link
            href={langPath("/blogs")}
            className="flex-grow font-comfortaa text-white transition hover:opacity-80"
          >
            {dict.trends}
          </Link>

          <Link
            href={langPath("/contactUs")}
            className="flex-grow font-comfortaa text-white transition hover:opacity-80"
          >
            {dict.contact}
          </Link>

          {/* Language */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("th")}
              className={` rounded-md p-1 transition ${currentLang === "th" ? "border border-white/50 bg-white/20" : "opacity-70 hover:opacity-100"}`}
            >
              <Image
                src={thflag}
                alt="TH"
                className="h-[18px] w-[26px] object-cover"
              />
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-md p-1 transition ${currentLang === "en" ? "border border-white/50 bg-white/20" : "opacity-70 hover:opacity-100"}`}
            >
              <Image
                src={ukflag}
                alt="EN"
                className="h-[18px] w-[26px] object-cover"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Free Trial */}
      {isScrolled && !isTrialPage && !isRegistrationPage && !hideFreeTrial && (
        <button
          onClick={scrollToEmail}
          className="fixed right-6 top-6 z-[99999] hidden animate-bounce rounded-full bg-[#F7C94B] px-4 py-2 font-bold text-[#042451] shadow-xl transition hover:bg-yellow-400 active:scale-95 md:block"
        >
          {dict.freetrial}
        </button>
      )}
    </>
  );
};

export default Header;
