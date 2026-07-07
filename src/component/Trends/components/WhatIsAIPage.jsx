"use client";

import "./style.css";
import Link from "next/link";
import { useLanguage } from "@/hook/useLanguage";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WhatIsAIPage = () => {
  const { dict, lang, langPath } = useLanguage();

  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setLoadVideo(true);
        }
      },
      { threshold: 0.1 },
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (!isVisible || isApiLoaded) return;

    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve(window.YT);
        } else {
          const existingScript = document.querySelector(
            'script[src="https://www.youtube.com/iframe_api"]',
          );
          if (!existingScript) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
          }
          window.onYouTubeIframeAPIReady = () => resolve(window.YT);
        }
      });
    };

    loadYouTubeAPI().then((YT) => {
      setIsApiLoaded(true);

      new YT.Player("player", {
        videoId: "vl50y_J7Pis",
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: "vl50y_J7Pis",
          playsinline: 1,
          mute: 1,
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
            event.target.playVideo();
          },
        },
      });
    });
  }, [isVisible, isApiLoaded]);

  const toggleSound = () => {
    if (!playerRef.current) return;
    if (isMuted) playerRef.current.unMute();
    else playerRef.current.mute();
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (!playerRef.current) return;
    if (isVisible) playerRef.current.playVideo();
    else playerRef.current.pauseVideo();
  }, [isVisible]);

  return (
    <>
      <div className="font-comfortaa trends-thai min-h-screen bg-linear-to-b from-[#ecf1ff] via-[#f8faff] to-white overflow-hidden">
        {/* HERO */}
        <section className="mt-5 relative px-4 pt-20 pb-10 sm:px-6 md:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center rounded-full bg-[#e0dff8] px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-600 shadow-sm">
              {dict.Blogs_Tech_1}
            </div>

            <h1
              className={`mx-auto ${lang === "th" ? "looped-text" : ""} mt-6 max-w-4xl text-2xl font-bold leading-tight text-[#042451] sm:text-4xl md:text-5xl`}
            >
              {dict.Blogs_Tech_2}
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              {dict.Blogs_Tech_3} <b>{dict.Blogs_Tech_4}</b>
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl space-y-10">
            {/* INTRO CARD */}
            <div className="rounded-3xl bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8 lg:p-12">
              <div className="grid items-start gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2
                    className={`text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] sm:text-2xl md:text-3xl`}
                  >
                    {dict.Blogs_Tech_6}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                    {dict.Blogs_Tech_7}
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                    {dict.Blogs_Tech_8}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <span className="rounded-full bg-[#eaf8ec] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-green-700">
                      {dict.Blogs_Tech_9}
                    </span>
                    <span className="rounded-full bg-[#eef4ff] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-700">
                      {dict.Blogs_Tech_9}
                    </span>
                    <span className="rounded-full bg-[#fff2df] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-orange-600">
                      {dict.Blogs_Tech_9}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl bg-linear-to-br from-[#718fdd] to-[#7e8ff1] p-5 shadow-lg sm:p-6">
                  <div className="space-y-3">
                    <div className="rounded-xl bg-white/90 p-3.5 text-center shadow-xs">
                      <p
                        className={`text-base font-bold ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                      >
                        {dict.Blogs_Tech_12}
                      </p>
                    </div>
                    {[
                      dict.Blogs_Tech_13,
                      dict.Blogs_Tech_14,
                      dict.Blogs_Tech_15,
                      dict.Blogs_Tech_16,
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-white/80 p-3.5 shadow-xs transition-all hover:bg-white"
                      >
                        <p
                          className={`text-xs sm:text-sm font-medium ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                        >
                          ✅ {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* STEP SECTION */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* STEP 1 */}
              <div className="rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 flex flex-col justify-between">
                <div>
                  <h3
                    className={`mt-4 text-lg sm:text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}
                  >
                    {dict.Blogs_Tech_17}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                    {dict.Blogs_Tech_18}
                  </p>
                  <div className="mt-4 p-4 rounded-2xl bg-gray-50 space-y-2 text-sm sm:text-base text-gray-700">
                    <p className="font-semibold text-[#042451]">
                      {dict.Blogs_Tech_19}
                    </p>
                    <p className="pl-3 border-l-2 border-red-400">
                      <b>{dict.Blogs_Tech_20}</b> {dict.Blogs_Tech_21}
                    </p>
                    <p className="pl-3 border-l-2 border-green-400">
                      <b>{dict.Blogs_Tech_22}</b> {dict.Blogs_Tech_23}
                    </p>
                    <p className="pl-3 border-l-2 border-blue-400">
                      <b>{dict.Blogs_Tech_23_1}</b>
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <h3
                  className={`mt-4 text-lg sm:text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}
                >
                  {dict.Blogs_Tech_24}
                </h3>
                <div className="mt-3 space-y-3 text-xs sm:text-sm leading-relaxed text-gray-600">
                  <p className="font-medium text-gray-800">
                    {dict.Blogs_Tech_25}
                  </p>
                  <div className="space-y-2">
                    <p className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100">
                      📌{" "}
                      <span className="font-bold text-[#042451]">
                        {dict.Blogs_Tech_26}
                      </span>{" "}
                      {dict.Blogs_Tech_27} <b>{dict.Blogs_Tech_28}</b>{" "}
                      {dict.Blogs_Tech_29}
                    </p>
                    <p className="p-4 rounded-2xl bg-green-50/50 border border-green-100">
                      📌{" "}
                      <span className="font-bold text-[#042451]">
                        {dict.Blogs_Tech_30}
                      </span>{" "}
                      {dict.Blogs_Tech_31}{" "}<b>{dict.Blogs_Tech_32}</b>{" "}
                      {dict.Blogs_Tech_33}
                    </p>
                    <p className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                      📌{" "}
                      <span className="font-bold text-[#042451]">
                        {dict.Blogs_Tech_34}
                      </span>{" "}
                      {dict.Blogs_Tech_35}{" "}
                      <b>
                        {dict.Blogs_Tech_36}
                      </b>{" "}
                        {dict.Blogs_Tech_37}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="rounded-3xl bg-linear-to-br from-[#bae0e9] to-[#a5bdf0] p-5 shadow-md sm:p-8 lg:col-span-2">
                {/* เพิ่ม lg:items-center เพื่อจัดกึ่งกลางเนื้อหาบน-ล่าง (แนวตั้ง) บนหน้าจอใหญ่ */}
                <div className="grid items-start lg:items-center gap-6 lg:grid-cols-12">
                  {/* ฝั่งข้อความ */}
                  <div className="lg:col-span-7">
                    <h3
                      className={`mt-4 text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] sm:text-2xl`}
                    >
                        {dict.Blogs_Tech_38}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#183153]">
                      <b>{dict.Blogs_Tech_39}</b>{" "}
                      {dict.Blogs_Tech_40}{" "}
                      <b>
                        {dict.Blogs_Tech_41}
                      </b>{" "}
                      {dict.Blogs_Tech_42}
                      {" "}
                      <b>{dict.Blogs_Tech_42_1}</b>
                    </p>
                    <div className="mt-4 rounded-xl bg-white/70 p-4 text-xs sm:text-sm text-[#042451] border border-green-200/50">
                      💡
                      {dict.Blogs_Tech_43}
                    </div>
                  </div>

                  {/* ฝั่งวิดีโอ */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <p
                      className={`text-sm font-bold ${lang === "th" ? "looped-text" : ""} text-center text-[#042451]`}
                    >
                      {dict.Blogs_Tech_44}
                    </p>
                    <p
                      className={`text-sm font-bold ${lang === "th" ? "looped-text" : ""} text-center text-[#042451]`}
                    >
                      {dict.Blogs_Tech_45}
                    </p>
                    <div
                      className="w-full max-w-70 sm:max-w-[320px] aspect-9/16 overflow-hidden rounded-2xl shadow-lg relative"
                      ref={videoRef}
                    >
                      {loadVideo ? (
                        <div id="player" className="w-full h-full" />
                      ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center text-white/40 text-xs">
                          Loading Video...
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={toggleSound}
                        aria-label={
                          isMuted ? "เปิดเสียงวิดีโอ" : "ปิดเสียงวิดีโอ"
                        }
                        className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-xs text-white text-sm hover:scale-110 active:scale-95 transition-all"
                      >
                        {isMuted ? "🔇" : "🔊"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:col-span-2">
                <h3
                  className={`mt-4 text-lg sm:text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}
                >
                  {dict.Blogs_Tech_46}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                    {dict.Blogs_Tech_47}
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100">
                    <p className="font-bold text-center text-sm sm:text-base text-pink-700">
                      {dict.Blogs_Tech_48}
                    </p>
                    <p className="mt-1 text-center text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {dict.Blogs_Tech_49}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <p className="font-bold text-center text-sm sm:text-base text-purple-700">
                        {dict.Blogs_Tech_50}
                    </p>
                    <p className="mt-1 text-center text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {dict.Blogs_Tech_51}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <p className="font-bold text-center text-sm sm:text-base text-blue-700">
                      {dict.Blogs_Tech_52}
                    </p>
                    <p className="mt-1 text-center text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {dict.Blogs_Tech_53}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-3xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8 md:p-10">
              <h3
                className={`text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] sm:text-2xl`}
              >
                {dict.Blogs_Tech_54}
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  {
                    q: dict.Blogs_Tech_55,
                    a: dict.Blogs_Tech_56,
                  },
                  {
                    q: dict.Blogs_Tech_57,
                    a: dict.Blogs_Tech_58,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-100 bg-[#fafcff] p-4 sm:p-5"
                  >
                    <p className="text-sm sm:text-base font-bold text-[#042451]">
                      {item.q}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-linear-to-b from-[#80a5d8] to-[#5193f0] p-6 text-center text-white sm:p-10 lg:p-14 shadow-xl">
              <h2
                className={`text-xl ${lang === "th" ? "looped-text" : ""} font-bold sm:text-3xl lg:text-4xl`}
              >
                {dict.Blogs_Tech_59}
              </h2>

              <div className="mx-auto mt-4 max-w-3xl space-y-3 text-xs sm:text-base text-gray-200 leading-relaxed">
                <p>
                  {dict.Blogs_Tech_60}{" "}
                  <b>{dict.Blogs_Tech_61}</b>{" "}
                  {dict.Blogs_Tech_62}
                </p>
                <p>
                  {dict.Blogs_Tech_63}
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href={langPath("/contactUs")}
                  className="w-full max-w-md rounded-full bg-[#F7C94B] px-6 py-3.5 text-center text-sm sm:text-lg font-bold text-[#042451] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd86f]"
                >
                    {dict.Blogs_Tech_64}
                </Link>
              </div>

              <p
                className={`mt-6 text-sm sm:text-lg ${lang === "th" ? "looped-text" : ""} font-semibold text-[#F7C94B]`}
              >
                {dict.Blogs_Tech_65}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatIsAIPage;
