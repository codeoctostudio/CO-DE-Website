"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/hook/useLanguage";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

const Layer1 = () => {
  const { dict, lang } = useLanguage();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start bg-[#042451] pb-12 pt-0 md:pt-32">
      <div className="h-[65dvh] min-h-100 w-full max-w-4xl md:h-[55dvh] lg:h-[60dvh] flex items-center justify-center">
        {isClient ? (
          <LottiePlayer
            src="/lottie/intro.json"
            autoplay
            keepLastFrame
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full" />
        )}
      </div>
      {/* Content */}
      <div className="relative z-10 -mt-20 flex flex-col items-center px-6 font-comfortaa text-white md:-mt-10">
        {/* Title */}
        <h1 className="mb-4 text-center text-[1.1rem] leading-snug sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2.3rem]">
          {/* Mobile */}
          <span className="block md:hidden">
            <span className="block font-looped">{dict.layer1_1}</span>

            <span className="mx-auto my-2 block h-0.5 w-10/12 bg-white/60" />

            <span className="block text-[1rem] opacity-90">
              {dict.layer1_2}
            </span>
          </span>

          {/* Tablet & Desktop */}
          <span className="hidden md:inline">
            <p className={`inline ${lang === "th" ? "font-looped" : ""}`}>
              {dict.layer1_1}
            </p>{" "}
            <span className="opacity-70">|</span>{" "}
            <p className="inline">{dict.layer1_2}</p>
          </span>
        </h1>

        {/* Description */}
        <section className="mx-auto max-w-5xl text-center text-[0.95rem] leading-relaxed text-white/90 sm:text-[1rem] md:text-[1.25rem] lg:text-[1.4rem]">
          <span className="block md:hidden">
            {dict.layer1_3} {dict.layer1_4}
          </span>

          <span className="hidden md:inline">
            {dict.layer1_3} {dict.layer1_4}
          </span>
        </section>
      </div>
    </main>
  );
};

export default Layer1;
