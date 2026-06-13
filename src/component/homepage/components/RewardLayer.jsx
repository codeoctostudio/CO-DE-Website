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

const RewardLayer = () => {
  const {dict, lang, langPath} = useLanguage();
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

  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

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

  const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const duration = 3500;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        const eased = easeOutExpo(percent);
        const value = Math.floor(eased * target);

        setCount(value);
        if (percent < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [target]);

    return <span>{count}+</span>;
  };

  const CounterPercent = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const duration = 3500;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        const eased = easeOutExpo(percent);
        const value = Math.floor(eased * target);

        setCount(value);
        if (percent < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [target]);

    return <span>{count}%</span>;
  };
  const ContinuePercent = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const duration = 3500;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        const eased = easeOutExpo(percent);
        const value = Math.floor(eased * target);

        setCount(value);
        if (percent < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [target]);

    return <span>{'>'}{count}%</span>;
  };

  const studentCount = useAutoIncrement(1200);
  const continuouslyCount = 90;
  const projectCount = 100;

  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
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
          window.onYouTubeIframeAPIReady = () => {
            resolve(window.YT);
          };
        }
      });
    };

    let player;
    loadYouTubeAPI().then((YT) => {
      player = new YT.Player("player", {
        videoId: "StcSyRYzpuU",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: "StcSyRYzpuU",
          playsinline: 1,
          mute: 1,
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
          },
        },
      });
    });

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const toggleSound = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (!playerRef.current) return;
    if (isVisible) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isVisible]);

  return (
    <section>
      <div className="relative flex w-full flex-col items-center font-comfortaa bg-gradient-to-b from-[#fbfbfb] to-[#ffffff] py-12 md:py-20">
        <div className="flex -mt-6 w-[90%] max-w-6xl flex-col items-center text-center gap-4 md:-mt-10">
          <h2
            className={`px-4 font-bold text-2xl md:text-4xl ${lang === "th" ? "font-looped" : ""}`}
          >
            {dict.reward_1}
          </h2>
          <p className="text-sm md:text-lg opacity-80 leading-relaxed max-w-full">
            {dict.reward_2}
          </p>
        </div>

        <div className="flex w-[90%] max-w-6xl flex-col md:flex-row gap-10 mt-10 justify-center items-center">
          {/* VIDEO */}
          <div className="w-full flex justify-center">
            <div
              ref={videoRef}
              className={`
                w-full max-w-[550px] max-h-[688px] aspect-[9/16]
                overflow-hidden rounded-3xl shadow-2xl
                transition-all duration-700 transform
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
            >
              <div className="relative w-full h-full">
                <div id="player" className="w-full h-full" />
                <button
                  onClick={toggleSound}
                  className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur text-white text-lg hover:scale-110 active:scale-95 transition"
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full md:w-full flex flex-col justify-center gap-4">
            <h3
              className={`text-xl md:text-2xl font-bold ${lang === "th" ? "font-looped" : ""} text-center`}
            >
              {dict.reward_3}
            </h3>
            <p className="text-base md:text-lg opacity-80 leading-relaxed text-center">
              {dict.reward_4}
            </p>

            <Image
              className="rounded-2xl shadow-xl mt-2 hover:scale-105 transition duration-300"
              src={img4}
              alt="Gold Medal – INTARG 2025"
              width={800}
              height={450}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="flex flex-col gap-2 mt-4 text-center md:text-left mx-auto md:mx-0">
              <p className="font-semibold">🥇 {dict.reward_5}</p>
              <p className="font-semibold">🥇 {dict.reward_6}</p>
              <p className="font-semibold">🏆 {dict.reward_7}</p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-full mt-14 group">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="rounded-3xl"
          >
            {slides.map((_, index) => {
              const first = slides[index];
              const second = slides[(index + 1) % slides.length];

              return (
                <SwiperSlide key={index} className="p-4 md:p-8 bg-transparent">
                  {/* MOBILE VIEW */}
                  <div className="flex md:hidden gap-4 items-center bg-white p-4 rounded-2xl shadow-md min-h-[140px]">
                    <div className="relative w-[35%] h-[100px] flex-shrink-0">
                      <Image
                        className="object-cover rounded-xl"
                        src={first.img}
                        alt={first.title || "Award Image"}
                        fill
                        sizes="35vw"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm line-clamp-1">
                        {first.title}
                      </h3>
                      <p className="text-xs opacity-70 line-clamp-2 mt-0.5">
                        {first.desc}
                      </p>
                      <p className="text-xs opacity-90 font-medium mt-1 text-[#042451]">
                        {first.location}
                      </p>
                    </div>
                  </div>

                  {/* DESKTOP VIEW */}
                  <div className="hidden md:flex gap-6 w-full">
                    {[first, second].map((item, i) => (
                      <div
                        key={i}
                        className="flex w-1/2 gap-4 items-center bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 min-h-[200px]"
                      >
                        <div className="relative w-[35%] h-[140px] flex-shrink-0">
                          <Image
                            className="object-cover rounded-xl"
                            src={item.img}
                            alt={item.title || "Award Image"}
                            fill
                            sizes="20vw"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="opacity-70 text-sm mt-1 line-clamp-2">
                            {item.desc}
                          </p>
                          <p className="opacity-60 text-xs mt-2 font-medium text-[#042451]">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* ปุ่มลูกศรควบคุมความคุมสไลด์แบบกำหนดคลาสเอง */}
          <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ◀
          </button>
          <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ▶
          </button>
        </div>

        {/* COUNTER BOX */}
        <div className="w-[99%] max-w-full mt-12 bg-[#cce6e4] rounded-3xl shadow-xl p-6 md:p-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl font-medium text-[#042451]">
                <Counter target={studentCount} />
              </p>
              <p className="text-sm md:text-base opacity-70 mt-2">
                {dict.reward_8}
              </p>
            </div>

            <div className="flex flex-col items-center border-x border-black/10">
              <p className="text-3xl md:text-5xl font-medium text-[#042451]">
                <ContinuePercent target={continuouslyCount} />
              </p>
              <p className="text-sm md:text-base opacity-70 mt-2">
                {dict.reward_9}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl font-medium text-[#042451]">
                <CounterPercent target={projectCount} />
              </p>
              <p className="text-sm md:text-base opacity-70 mt-2">
                {dict.reward_10}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-12 flex flex-col items-center text-center px-4">
          <h3
            className={`text-lg md:text-2xl font-bold leading-snug max-w-xl md:max-w-2xl ${lang === "th" ? "font-looped" : ""}`}
          >
            {dict.reward_11}
          </h3>
          <p className="mt-3 text-sm md:text-lg opacity-80 max-w-lg leading-relaxed">
            {dict.reward_12}
          </p>
          <div className="mt-6 w-full max-w-md">
            <button
              onClick={scrollToEmail}
              className="w-full rounded-full bg-gradient-to-r from-[#F7C94B] to-[#f5b700] px-6 py-3 md:py-4 text-lg md:text-xl font-semibold text-[#042451] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
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
