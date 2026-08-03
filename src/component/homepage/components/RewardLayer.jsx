"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLanguage } from "@/hook/useLanguage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import img1 from "@/assets/reward/Reward_1.webp";
import img2 from "@/assets/reward/Reward_2.webp";
import img3 from "@/assets/reward/Reward_3.webp";
import img4 from "@/assets/reward/Reward_Show.webp";

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

// Counter Components
const Counter = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const duration = 2000;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      const Collegeeased = easeOutExpo(percent);

      setCount(Math.floor(Collegeeased * target));

      if (percent < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, isVisible]);

  return <span>{count}+</span>;
};

const CounterPercent = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const duration = 2000;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      const Collegeeased = easeOutExpo(percent);

      setCount(Math.floor(Collegeeased * target));

      if (percent < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, isVisible]);

  return <span>{count}%</span>;
};

const ContinuePercent = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const duration = 2000;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      const Collegeeased = easeOutExpo(percent);

      setCount(Math.floor(Collegeeased * target));

      if (percent < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, isVisible]);

  return (
    <span>
      {">"}
      {count}%
    </span>
  );
};

const RewardLayer = () => {
  const { dict, lang, langPath } = useLanguage();
  const router = useRouter();

  const scrollToEmail = () => {
    router.push(langPath("/trialclass"));
  };

  const slides = [
    {
      img: img1,
      title: dict.reward_detail_1,
      desc: dict.reward_detail_1_1,
      location: dict.reward_detail_1_2,
    },
    {
      img: img2,
      title: dict.reward_detail_2,
      desc: dict.reward_detail_2_1,
      location: dict.reward_detail_2_2,
    },
    {
      img: img3,
      title: dict.reward_detail_3,
      desc: dict.reward_detail_3_1,
      location: dict.reward_detail_3_2,
    },
  ];

  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isApiReady, setIsApiReady] = useState(false);

  // ตรวจจับเมื่อ Scroll มาถึง Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // โหลด YouTube API และสร้าง Player เมื่อ Scroll มาถึง
  useEffect(() => {
    if (!isVisible || isApiReady) return;

    const initYouTubePlayer = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "StcSyRYzpuU",
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: "StcSyRYzpuU",
          playsinline: 1,
          mute: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
      setIsApiReady(true);
    };

    if (window.YT && window.YT.Player) {
      initYouTubePlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initYouTubePlayer();
      };
    }
  }, [isVisible, isApiReady]);

  // ฟังก์ชันสลับการเปิด/ปิดเสียง
  const toggleSound = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const useAutoIncrement = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
      const startDate = new Date("2026-04-17");
      const now = new Date();
      const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
      let current = initialValue;
      let dayCursor = 0;
      while (dayCursor < diffDays) {
        const randomGap = 5 + Math.floor(seededRandom(dayCursor) * 6);
        dayCursor += randomGap;
        if (dayCursor <= diffDays) {
          const increment = Math.floor(seededRandom(dayCursor + 1) * 5) + 1;
          current += increment;
        }
      }
      setValue(current);
    }, [initialValue]);
    return value;
  };

  const studentCount = useAutoIncrement(1200);
  const continuouslyCount = 90;
  const projectCount = 100;

  return (
    <section aria-labelledby="reward-main-heading" ref={sectionRef}>
      <div className="relative flex w-full flex-col items-center font-comfortaa bg-gradient-to-b from-[#fbfbfb] to-[#ffffff] py-8 md:py-20 px-4">
        {/* HEADER */}
        <div className="flex w-full max-w-6xl flex-col items-center text-center gap-3 md:gap-4">
          <h2
            id="reward-main-heading"
            className={`px-2 font-bold text-xl sm:text-2xl md:text-4xl ${lang === "th" ? "font-looped" : ""}`}
          >
            {dict.reward_1}
          </h2>
          <p className="text-xs sm:text-sm md:text-lg opacity-80 leading-relaxed max-w-2xl px-2">
            {dict.reward_2}
          </p>
        </div>

        {/* MAIN CONTENT (VIDEO + DETAILS) */}
        <div className="flex w-full max-w-6xl flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-10 justify-center items-center">
          {/* VIDEO CONTAINER */}
          <div className="w-full md:w-1/2 flex justify-center px-2">
            <div className="w-full max-w-75 sm:max-w-85 md:max-w-95 aspect-9/16 overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl relative bg-black">
              <div
                id="youtube-player"
                className="w-full h-full pointer-events-none scale-[1.35] origin-center"
              />
              {isApiReady && (
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2.5 md:p-3 rounded-full backdrop-blur-md transition duration-300 shadow-lg flex items-center justify-center cursor-pointer"
                >
                  {isMuted ? (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* TEXT & SHOWCASE IMAGE */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-3 md:gap-4 px-2">
            <h3
              className={`text-lg md:text-2xl font-bold ${lang === "th" ? "font-looped" : ""} text-center md:text-left`}
            >
              {dict.reward_3}
            </h3>
            <p className="text-sm md:text-lg opacity-80 leading-relaxed text-center md:text-left">
              {dict.reward_4}
            </p>

            <Image
              className="rounded-xl md:rounded-2xl shadow-lg mt-1 hover:scale-[1.02] transition duration-300 w-full h-auto object-cover"
              src={img4}
              alt="เหรียญทองระดับนานาชาติ – เวที INTARG 2025"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="flex flex-col gap-1.5 md:gap-2 mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800">
              <p className="flex items-center gap-2">
                <span>🥇</span> {dict.reward_5}
              </p>
              <p className="flex items-center gap-2">
                <span>🥇</span> {dict.reward_6}
              </p>
              <p className="flex items-center gap-2">
                <span>🏆</span> {dict.reward_7}
              </p>
            </div>
          </div>
        </div>

        {/* SWIPER SLIDER */}
        <div className="relative w-full mt-10 md:mt-14 group px-2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
            className="rounded-2xl md:rounded-3xl pb-10 md:pb-12"
          >
            {slides.map((_, index) => {
              const first = slides[index];
              const second = slides[(index + 1) % slides.length];

              return (
                <SwiperSlide key={index} className="bg-transparent">
                  {/* MOBILE VIEW CARD */}
                  <div className="flex md:hidden flex-col bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="relative w-full h-44 shrink-0 overflow-hidden rounded-xl mb-3">
                      <Image
                        className="object-cover"
                        src={first.img}
                        alt={first.title || "ภาพรางวัล"}
                        fill
                        sizes="100vw"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-base text-gray-900 line-clamp-1">
                        {first.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {first.desc}
                      </p>
                      <p className="text-xs font-semibold text-[#042451] mt-1">
                        📍 {first.location}
                      </p>
                    </div>
                  </div>

                  {/* DESKTOP VIEW CARD */}
                  <div className="hidden md:flex gap-6 w-full">
                    {[first, second].map((item, i) => (
                      <div
                        key={i}
                        className="flex w-1/2 gap-4 items-center bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 min-h-45 border border-gray-100"
                      >
                        <div className="relative w-[35%] h-32 shrink-0">
                          <Image
                            className="object-cover rounded-xl"
                            src={item.img}
                            alt={item.title || "ภาพรางวัล"}
                            fill
                            sizes="50vw"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="opacity-70 text-sm mt-1 line-clamp-2">
                            {item.desc}
                          </p>
                          <p className="opacity-80 text-xs mt-2 font-semibold text-[#042451]">
                            📍 {item.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            type="button"
            aria-label="สไลด์ก่อนหน้า"
            className="custom-prev hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-10 h-10 items-center justify-center rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            ◀
          </button>
          <button
            type="button"
            aria-label="สไลด์ถัดไป"
            className="custom-next hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-10 h-10 items-center justify-center rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            ▶
          </button>
        </div>

        {/* COUNTER BOX */}
        <div className="w-full mt-8 md:mt-12 bg-[#cce6e4] rounded-2xl md:rounded-3xl shadow-lg p-5 md:p-10">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="flex flex-col items-center">
              <p className="text-xl sm:text-3xl md:text-5xl font-bold text-[#042451]">
                <Counter target={studentCount} isVisible={isVisible} />
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-75 mt-1 font-medium">
                {dict.reward_8}
              </p>
            </div>
            <div className="flex flex-col items-center border-x border-black/10 px-1">
              <p className="text-xl sm:text-3xl md:text-5xl font-bold text-[#042451]">
                <ContinuePercent
                  target={continuouslyCount}
                  isVisible={isVisible}
                />
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-75 mt-1 font-medium">
                {dict.reward_9}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl sm:text-3xl md:text-5xl font-bold text-[#042451]">
                <CounterPercent target={projectCount} isVisible={isVisible} />
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-75 mt-1 font-medium">
                {dict.reward_10}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-10 md:mt-14 flex flex-col items-center text-center px-2 w-full">
          <h3
            className={`text-base sm:text-xl md:text-2xl font-bold leading-snug max-w-xl ${lang === "th" ? "font-looped" : ""}`}
          >
            {dict.reward_11}
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-lg opacity-80 max-w-lg leading-relaxed">
            {dict.reward_12}
          </p>
          <div className="mt-5 w-full max-w-xs sm:max-w-md">
            <button
              type="button"
              onClick={scrollToEmail}
              className="w-full rounded-full bg-linear-to-r from-[#F7C94B] to-[#f5b700] px-6 py-3.5 md:py-4 text-base md:text-xl font-bold text-[#042451] shadow-md hover:shadow-lg active:scale-95 transition-all duration-300"
            >
              {dict.freetrial_1}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardLayer;
