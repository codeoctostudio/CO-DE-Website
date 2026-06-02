"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation"; import dynamic from "next/dynamic";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Layer1 = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main
      className="flex min-h-screen w-full flex-col items-center justify-start bg-[#042451] pb-[3rem] pt-[0rem] md:pt-[8rem]"
    >
      {isClient ? (
        <LottiePlayer
          src="/lottie/intro.json"
          autoplay
          keepLastFrame
          className="h-[65dvh] min-h-[400px] w-full max-w-7xl md:h-[55dvh] lg:h-[60dvh]"
        />
      ) : (
        <div className="h-[65dvh] min-h-[400px] w-full" />
      )}
      {/* Content */}
      <div
        className="relative z-10 mt-[-5rem] flex flex-col items-center px-6 font-comfortaa text-white md:-mt-10"
      >
        {/* Title */}
        <h1
          className="mb-4 text-center text-[1.1rem] leading-snug sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2.3rem]"
        >
          {/* Mobile */}
          <span className="block md:hidden">
            <span className="block looped-text">{t("layer1_1")}</span>

            <span className="mx-auto my-2 block h-[2px] w-10/12 bg-white/60" />

            <span className="block text-[1rem] opacity-90">
              {t?.("layer1_2") || "asd"}
            </span>
          </span>

          {/* Tablet & Desktop */}
          <span className="hidden md:inline">
            <p className={`inline ${lang === "th" ? "looped-text" : ""}`}>
              {t("layer1_1")}
            </p>{" "}
            <span className="opacity-70">|</span>{" "}
            <p className="inline">{t("layer1_2")}</p>
          </span>
        </h1>

        {/* Description */}
        <section
          className="mx-auto max-w-5xl text-center text-[0.95rem] leading-relaxed text-white/90 sm:text-[1rem] md:text-[1.25rem] lg:text-[1.4rem]"
        >
          <span className="block md:hidden">
            {t("layer1_3")} {t("layer1_4")}
          </span>

          <span className="hidden md:inline">
            {t("layer1_3")} {t("layer1_4")}
          </span>
        </section>
      </div>
    </main>
  );
};

export default Layer1;
