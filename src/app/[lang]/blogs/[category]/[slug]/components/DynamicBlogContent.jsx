"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hook/useLanguage"; // ป้องกัน Error langPath ด้วย Hook

const DynamicBlogContent = ({ dict, lang, blogData }) => {
  const { langPath } = useLanguage();
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoadVideo(true);
      },
      { threshold: 0.1 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    // โหลดเฉพาะกรณีที่กำหนดไว้ว่าเป็นบทความวิดีโอ
    if (!isVisible || isApiLoaded || !loadVideo || blogData?.mediaType !== "video" || !blogData?.videoId) return;

    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve(window.YT);
        } else {
          const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
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
        videoId: blogData.videoId,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: blogData.videoId,
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
  }, [isVisible, isApiLoaded, loadVideo, blogData?.videoId, blogData?.mediaType]);

  const toggleSound = () => {
    if (!playerRef.current) return;
    if (isMuted) playerRef.current.unMute();
    else playerRef.current.mute();
    setIsMuted(!isMuted);
  };

  const prefix = blogData?.apiKeyPrefix || "Blogs_Tech";
  const getTxt = (keyOrNum) => {
    if (typeof keyOrNum === "number") {
      return dict[`${prefix}_${keyOrNum}`] || "";
    }
    return dict[keyOrNum] || "";
  };

  return (
    <div className={`font-comfortaa trends-thai min-h-screen bg-linear-to-b ${blogData?.heroBgColor} overflow-hidden`}>
      {/* HERO */}
      <section className="mt-5 relative px-4 pt-20 pb-10 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold shadow-sm ${blogData?.tagBgColor}`}>
            {getTxt(1)}
          </div>
          <h1 className={`mx-auto mt-6 max-w-4xl text-2xl font-bold leading-tight text-[#042451] sm:text-4xl md:text-5xl ${lang === "th" ? "looped-text" : ""}`}>
            {getTxt(2)}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-lg md:text-xl">
            {getTxt(3)} <b>{getTxt(4)}</b>
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
                <h2 className={`text-xl font-bold text-[#042451] sm:text-2xl md:text-3xl ${lang === "th" ? "looped-text" : ""}`}>
                  {getTxt(6)}
                </h2> 
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">{getTxt(7)}</p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">{getTxt(8)}</p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {blogData?.introTags?.map((tagNum, idx) => {
                    const colors = ["bg-[#eaf8ec] text-green-700", "bg-[#eef4ff] text-blue-700", "bg-[#fff2df] text-orange-600"];
                    return (
                      <span key={idx} className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold ${colors[idx % 3]}`}>
                        {getTxt(tagNum)}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className={`lg:col-span-5 rounded-2xl bg-linear-to-br ${blogData?.introCardBg} p-5 shadow-lg sm:p-6`}>
                <div className="space-y-3">
                  <div className="rounded-xl bg-white/90 p-3.5 text-center shadow-xs">
                    <p className={`text-base font-bold text-[#042451] ${lang === "th" ? "looped-text" : ""}`}>
                      {getTxt(blogData?.introChecklistTitle)}
                    </p>
                  </div>
                  {blogData?.introChecklist?.map((textNum, idx) => (
                    <div key={idx} className="rounded-xl bg-white/80 p-3.5 shadow-xs transition-all hover:bg-white">
                      <p className={`text-xs sm:text-sm font-medium text-[#042451] ${lang === "th" ? "looped-text" : ""}`}>
                        ✅ {getTxt(textNum)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC STEPS ENGINE */}
          <div className="grid gap-6 lg:grid-cols-2">
            {blogData?.steps?.map((step, index) => {
              const isFullWidth = step.isFullWidth;

              return (
                <div 
                  key={index} 
                  className={`rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 flex flex-col justify-between ${
                    isFullWidth ? "lg:col-span-2" : ""
                  } ${step.type === "media-layout" && blogData.mediaType === "video" ? "bg-linear-to-br from-[#bae0e9] to-[#a5bdf0]" : ""} ${
                    step.type === "media-layout" && blogData.mediaType === "image" ? "bg-linear-to-br from-[#ffe6df] to-[#fcd0ba]" : ""
                  }`}
                >
                  {/* layout 1: sub-points */}
                  {step.type === "sub-points" && (
                    <div>
                      <h3 className={`mt-4 text-lg sm:text-xl font-bold text-[#042451] ${lang === "th" ? "looped-text" : ""}`}>
                        {getTxt(step.titleKey)}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">{getTxt(step.contentKey)}</p>
                      <div className="mt-4 p-4 rounded-2xl bg-gray-50 space-y-2 text-sm sm:text-base text-gray-700">
                        <p className="font-semibold text-[#042451]">{getTxt(step.subPointsTitleKey)}</p>
                        {step.subPoints?.map((pt, pIdx) => (
                          <p key={pIdx} className={`pl-3 border-l-2 ${pt.borderColor}`}>
                            {pt.labelKey && <b>{getTxt(pt.labelKey)}</b>} {pt.textKey && getTxt(pt.textKey)}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* layout 2: highlight boxes */}
                  {step.type === "highlight-boxes" && (
                    <div>
                      <h3 className={`mt-4 text-lg sm:text-xl font-bold text-[#042451] ${lang === "th" ? "looped-text" : ""}`}>
                        {getTxt(step.titleKey)}
                      </h3>
                      <div className="mt-3 space-y-3 text-xs sm:text-sm leading-relaxed text-gray-600">
                        <p className="font-medium text-gray-800">{getTxt(step.contentKey)}</p>
                        <div className="space-y-2">
                          {step.boxes?.map((box, bIdx) => (
                            <p key={bIdx} className={`p-4 rounded-2xl border ${box.bgClass}`}>
                              📌 <span className="font-bold text-[#042451]">{getTxt(box.titleKey)}</span>{" "}
                              {getTxt(box.textKey)} <b>{getTxt(box.boldKey)}</b> {getTxt(box.suffixKey)}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* layout 3: MEDIA LAYOUT (รองรับทั้งรูปภาพและวิดีโอ) */}
                  {step.type === "media-layout" && (
                    <div className="grid items-start lg:items-center gap-6 lg:grid-cols-12">
                      <div className="lg:col-span-7">
                        <h3 className={`mt-4 text-xl font-bold text-[#042451] sm:text-2xl ${lang === "th" ? "looped-text" : ""}`}>
                          {getTxt(step.titleKey)}
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#183153]">
                          <b>{getTxt(step.contentKey)}</b> {getTxt(step.textKey2)} <b>{getTxt(step.boldKey2)}</b> {getTxt(step.textKey3)} <b>{getTxt(step.boldKey3)}</b>
                        </p>
                        <div className="mt-4 rounded-xl bg-white/70 p-4 text-xs sm:text-sm text-[#042451] border border-orange-200/50">
                          💡 {getTxt(step.tipKey)}
                        </div>
                      </div>

                      <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                        <p className={`text-sm font-bold text-center text-[#042451] ${lang === "th" ? "looped-text" : ""}`}>
                          {getTxt(step.mediaTitle1)}
                        </p>
                        <p className={`text-sm font-bold text-center text-[#042451] ${lang === "th" ? "looped-text" : ""}`}>
                          {getTxt(step.mediaTitle2)}
                        </p>

                        {/* ตรวจสอบประเภทมีเดีย */}
                        {blogData.mediaType === "video" ? (
                          <div className="w-full max-w-70 sm:max-w-[320px] aspect-9/16 overflow-hidden rounded-2xl shadow-lg relative" ref={videoRef}>
                            {loadVideo ? (
                              <div id="player" className="w-full h-full" />
                            ) : (
                              <div className="w-full h-full bg-black flex items-center justify-center text-white/40 text-xs">Loading Video...</div>
                            )}
                            <button
                              type="button"
                              onClick={toggleSound}
                              className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-xs text-white text-sm hover:scale-110 transition-all"
                            >
                              {isMuted ? "🔇" : "🔊"}
                            </button>
                          </div>
                        ) : (
                          /* แสดงผลแบบ Image ถ้าระบุมีเดียเป็นรูปภาพ */
                          <div className="w-full max-w-70 sm:max-w-[320px] aspect-9/16 overflow-hidden rounded-2xl shadow-lg relative bg-gray-100">
                            <Image 
                              src={blogData.imageUrl || "/images/fallback.webp"} 
                              alt="Blog illustration image" 
                              fill
                              sizes="(max-w-72) 100vw, 320px"
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* layout 4: columns grid */}
                  {step.type === "columns-3" && (
                    <div>
                      <h3 className={`mt-4 text-lg sm:text-xl font-bold text-[#042451] ${lang === "th" ? "looped-text" : ""}`}>
                        {getTxt(step.titleKey)}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">{getTxt(step.descKey)}</p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        {step.columns?.map((col, cIdx) => (
                          <div key={cIdx} className={`p-4 rounded-2xl border ${col.bgClass}`}>
                            <p className="font-bold text-center text-sm sm:text-base">{getTxt(col.titleKey)}</p>
                            <p className="mt-1 text-center text-xs sm:text-sm text-gray-600 leading-relaxed">{getTxt(col.descKey)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* FAQ */}
          <div className="rounded-3xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8 md:p-10">
            <h3 className={`text-xl font-bold text-[#042451] sm:text-2xl ${lang === "th" ? "looped-text" : ""}`}>
              {getTxt(54)}
            </h3>
            <div className="mt-6 space-y-4">
              {blogData?.faqs?.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-gray-100 bg-[#fafcff] p-4 sm:p-5">
                  <p className="text-sm sm:text-base font-bold text-[#042451]">{getTxt(item.qKey)}</p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">{getTxt(item.aKey)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`rounded-3xl bg-linear-to-b ${blogData?.ctaBg} p-6 text-center text-white sm:p-10 lg:p-14 shadow-xl`}>
            <h2 className={`text-xl font-bold sm:text-3xl lg:text-4xl ${lang === "th" ? "looped-text" : ""}`}>
              {getTxt(blogData?.ctaTitle)}
            </h2>
            <div className="mx-auto mt-4 max-w-3xl space-y-3 text-xs sm:text-base text-gray-200 leading-relaxed">
              <p>{getTxt(blogData?.ctaText1)} <b>{getTxt(blogData?.ctaBold1)}</b> {getTxt(blogData?.ctaText2)}</p>
              <p>{getTxt(blogData?.ctaText3)}</p>
            </div>
            <div className="mt-8 flex justify-center">
              <Link href={langPath(blogData?.ctaLink || "/contactUs")} className="w-full max-w-md rounded-full bg-[#F7C94B] px-6 py-3.5 text-center text-sm sm:text-lg font-bold text-[#042451] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd86f]">
                {getTxt(blogData?.ctaButtonText)}
              </Link>
            </div>
            <p className={`mt-6 text-sm sm:text-lg font-semibold text-[#F7C94B] ${lang === "th" ? "looped-text" : ""}`}>
              {getTxt(blogData?.ctaFooterText)}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DynamicBlogContent;