"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hook/useLanguage";

const DynamicBlogContent = ({ dict = {}, lang = "th", blogData = {} }) => {
  const { langPath } = useLanguage();

  // ระบบดึงข้อมูลโครงสีแยกตามหมวดหมู่
  const categories = {
    tutorials: {
      label: dict?.category_tutorials || "Tutorials",
      color: "from-green-50 via-green-100/30 to-white",
      tag: "bg-green-100 text-green-700",
      introCardBg: "from-green-500 to-emerald-600",
      ctaBg: "from-green-600 to-emerald-700",
      icon: "🧩",
    },
    parents: {
      label: dict?.category_parents || "Parents Guide",
      color: "from-pink-50 via-pink-100/30 to-white",
      tag: "bg-pink-100 text-pink-700",
      introCardBg: "from-pink-500 to-rose-600",
      ctaBg: "from-pink-600 to-rose-700",
      icon: "👨‍👩‍👧",
    },
    "technology-trends": {
      label: dict?.category_technology_trends || "Technology Trends",
      color: "from-blue-50 via-blue-100/30 to-white",
      tag: "bg-blue-300 text-blue-700",
      introCardBg: "from-blue-600 to-indigo-700",
      ctaBg: "from-blue-600 to-indigo-700",
      icon: "🤖",
    },
    guide: {
      label: dict?.category_guide || "Learning Roadmap",
      color: "from-orange-50 via-orange-100/30 to-white",
      tag: "bg-orange-100 text-orange-700",
      introCardBg: "from-orange-500 to-amber-600",
      ctaBg: "from-orange-600 to-amber-700",
      icon: "🎓",
    },
    reward: {
      label: dict?.category_reward || "Reward",
      color: "from-amber-50 via-yellow-100/40 to-white",
      tag: "bg-gradient-to-r from-yellow-200 to-amber-300 text-amber-900",
      introCardBg: "from-amber-400 via-yellow-500 to-amber-600",
      ctaBg: "from-amber-500 to-yellow-600",
      icon: "🏆",
    },
  };

  // Safe Fallback สำหรับ Theme
  const currentTheme =
    categories[blogData?.categoryType] || categories["technology-trends"];

  const currentLang = lang === "en" ? "en" : "th";

  // Safe Fallback Content สำหรับพรีวิว real-time
  const localizedContent =
    blogData?.[currentLang] || blogData?.["th"] || blogData?.["en"] || {};

  const stepsData = Array.isArray(blogData?.steps) ? blogData.steps : [];

  const getEmbedUrl = (step) => {
    try {
      const url = step?.videoUrl || blogData?.videoUrl || "";
      const videoId = step?.videoId || blogData?.videoId || "";
      const platform = (
        step?.platform ||
        blogData?.platform ||
        ""
      ).toLowerCase();

      if (!url && !videoId) return null;

      // 1. YouTube
      if (
        platform === "youtube" ||
        url.includes("youtube.com") ||
        url.includes("youtu.be")
      ) {
        let id = videoId;
        if (!id && url) {
          if (url.includes("shorts/")) {
            id = url.split("shorts/")[1]?.split("?")[0];
          } else if (url.includes("watch?v=")) {
            id = url.split("watch?v=")[1]?.split("&")[0];
          } else if (url.includes("youtu.be/")) {
            id = url.split("youtu.be/")[1]?.split("?")[0];
          }
        }
        return id
          ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1`
          : null;
      }

      // 2. TikTok
      if (platform === "tiktok" || url.includes("tiktok.com")) {
        let id = videoId;
        if (!id && url) {
          const match = url.match(/\/video\/(\d+)/);
          if (match) id = match[1];
        }
        return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
      }

      // 3. Instagram
      if (platform === "instagram" || url.includes("instagram.com")) {
        if (url) {
          const cleanUrl = url.split("?")[0].replace(/\/$/, "");
          return `${cleanUrl}/embed`;
        }
      }

      // 4. Facebook
      if (platform === "facebook" || url.includes("facebook.com")) {
        if (url) {
          return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
            url,
          )}&show_text=false&autoplay=true`;
        }
      }

      return url || null;
    } catch {
      return null;
    }
  };

  /**
   * ฟังก์ชันสำหรับ Render Media
   */
  const renderMediaContent = (step) => {
    const mediaType = step?.mediaType || blogData?.mediaType || "image";
    const imageUrl = step?.imageUrl || blogData?.imageUrl;

    // กรณีเป็นรูปภาพ
    if (mediaType === "image" || !mediaType) {
      return (
        <div className="w-full max-w-70 sm:max-w-[320px] aspect-9/16 overflow-hidden rounded-2xl shadow-lg relative bg-gray-100 border flex items-center justify-center">
          <Image
            src={imageUrl || "/images/fallback.webp"}
            alt="Blog media illustration"
            fill
            sizes="(max-width: 320px) 100vw, 320px"
            className="object-cover"
            unoptimized={
              imageUrl?.startsWith("blob:") || imageUrl?.startsWith("data:")
            } // รองรับการ Preview รูปภาพแบบ Instant Upload
          />
        </div>
      );
    }

    // กรณีเป็นวิดีโอ (YouTube, TikTok, Facebook, IG)
    if (mediaType === "video") {
      const embedUrl = getEmbedUrl(step);

      if (!embedUrl) {
        return (
          <div className="w-full max-w-70 sm:max-w-[320px] aspect-9/16 overflow-hidden rounded-2xl shadow-lg relative bg-gray-800 flex items-center justify-center text-white/70 text-xs text-center p-4">
            กรุณาใส่ลิงก์วิดีโอที่ถูกต้องเพื่อดูตัวอย่าง
          </div>
        );
      }

      return (
        <div className="w-full max-w-70 sm:max-w-[320px] aspect-9/16 overflow-hidden rounded-2xl shadow-lg relative bg-black">
          <iframe
            src={embedUrl}
            title="Social Media Video Player"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`font-comfortaa trends-thai min-h-screen bg-linear-to-b ${currentTheme.color} overflow-x-hidden`}
    >
      {/* HERO */}
      <section className="mt-8 relative px-4 pt-16 pb-8 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold shadow-xs ${currentTheme.tag}`}
          >
            <span>{currentTheme.icon}</span>
            <span className="wrap-break-word">{currentTheme.label}</span>
          </div>
          <h1
            className={`mx-auto mt-6 max-w-4xl text-2xl font-bold leading-tight text-[#042451] sm:text-4xl md:text-5xl wrap-break-word whitespace-pre-line ${
              lang === "th" ? "looped-text" : ""
            }`}
          >
            {localizedContent?.introTitle || "ชื่อหัวข้อบทความ (Preview)"}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-lg md:text-xl wrap-break-word whitespace-pre-line">
            {localizedContent?.introDesc1}
            {localizedContent?.introDesc2}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl space-y-10">
          {/* INTRO CARD */}
          <div className="rounded-3xl bg-white p-4 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8 lg:p-12 overflow-hidden">
            <div className="grid items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7 w-full min-w-0">
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {(localizedContent?.introTags || []).map((tagText, idx) => {
                    const colors = [
                      "bg-[#eaf8ec] text-green-700",
                      "bg-[#eef4ff] text-blue-700",
                      "bg-[#fff2df] text-orange-600",
                    ];
                    return (
                      <span
                        key={idx}
                        className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold wrap-break-word max-w-full ${
                          colors[idx % 3]
                        }`}
                      >
                        {tagText}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div
                className={`lg:col-span-5 w-full min-w-0 rounded-2xl bg-linear-to-br ${currentTheme.introCardBg} p-4 sm:p-6 shadow-lg`}
              >
                <div className="space-y-3">
                  <div className="rounded-xl bg-white/90 p-3 sm:p-3.5 text-center shadow-xs">
                    <p
                      className={`text-sm sm:text-base font-bold text-[#042451] wrap-break-word ${
                        lang === "th" ? "looped-text" : ""
                      }`}
                    >
                      {localizedContent?.introChecklistTitle || "Checklist"}
                    </p>
                  </div>
                  {(localizedContent?.introChecklist || []).map(
                    (itemText, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-white/80 p-3 sm:p-3.5 shadow-xs transition-all hover:bg-white wrap-break-word"
                      >
                        <p
                          className={`text-xs sm:text-sm font-medium text-[#042451] flex items-start gap-2 ${
                            lang === "th" ? "looped-text" : ""
                          }`}
                        >
                          <span className="shrink-0">✅</span>
                          <span className="wrap-break-word w-full">
                            {itemText}
                          </span>
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC STEPS ENGINE */}
          <div className="grid gap-6 lg:grid-cols-2">
            {stepsData.map((step, index) => {
              const isFullWidth = step?.isFullWidth;
              const stepLang =
                step?.[currentLang] || step?.["th"] || step?.["en"] || {};
              const stepTitle = stepLang?.title || "";
              const stepContentText = stepLang?.content || "";

              return (
                <div
                  key={index}
                  className={`rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 flex flex-col justify-between overflow-hidden min-w-0 w-full ${
                    isFullWidth ? "lg:col-span-2" : ""
                  } ${
                    step?.type === "media-layout" &&
                    blogData?.mediaType === "video"
                      ? "bg-linear-to-br from-[#bae0e9] to-[#a5bdf0]"
                      : ""
                  } ${
                    step?.type === "media-layout" &&
                    blogData?.mediaType === "image"
                      ? "bg-linear-to-br from-[#ffe6df] to-[#fcd0ba]"
                      : ""
                  }`}
                >
                  {/* layout 1: sub-points */}
                  {step?.type === "sub-points" && (
                    <div className="w-full min-w-0">
                      <h3
                        className={`mt-4 text-lg sm:text-xl font-bold text-[#042451] wrap-break-word ${
                          lang === "th" ? "looped-text" : ""
                        }`}
                      >
                        {stepTitle}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 wrap-break-word">
                        {stepContentText}
                      </p>

                      {Array.isArray(step?.subPoints) && (
                        <div className="mt-4 p-4 rounded-2xl bg-gray-50/70 space-y-2 text-sm sm:text-base text-gray-700 border border-gray-100 wrap-break-word w-full overflow-hidden">
                          <p className="font-semibold text-[#042451] wrap-break-word">
                            {step?.subPointsTitle}
                          </p>
                          {step.subPoints.map((pt, pIdx) => {
                            const ptLang =
                              pt?.[currentLang] || pt?.["th"] || pt;
                            return (
                              <p
                                key={pIdx}
                                className={`pl-3 border-l-2 wrap-break-word ${
                                  pt?.borderColor || "border-blue-400"
                                }`}
                              >
                                {(ptLang?.label || pt?.label) && (
                                  <b className="wrap-break-word">
                                    {ptLang?.label || pt?.label}
                                  </b>
                                )}{" "}
                                <span className="wrap-break-word">
                                  {ptLang?.text || pt?.text}
                                </span>
                              </p>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* layout 2: highlight boxes */}
                  {step?.type === "highlight-boxes" && (
                    <div className="w-full min-w-0">
                      <h3
                        className={`mt-4 text-lg sm:text-xl font-bold text-[#042451] wrap-break-word ${
                          lang === "th" ? "looped-text" : ""
                        }`}
                      >
                        {stepTitle}
                      </h3>
                      <div className="mt-3 space-y-3 text-xs sm:text-sm leading-relaxed text-gray-600">
                        <p className="font-medium text-gray-800 wrap-break-word">
                          {stepContentText}
                        </p>

                        {Array.isArray(step?.boxes) && (
                          <div className="grid gap-2.5 mt-2 w-full">
                            {step.boxes.map((box, bIdx) => {
                              const boxLang =
                                box?.[currentLang] || box?.["th"] || box;
                              return (
                                <div
                                  key={bIdx}
                                  className={`p-4 rounded-2xl border wrap-break-word w-full overflow-hidden ${
                                    box?.bgClass ||
                                    "bg-blue-50/50 border-blue-100"
                                  }`}
                                >
                                  📌{" "}
                                  <span className="font-bold text-[#042451] wrap-break-word">
                                    {boxLang?.title || box?.title}
                                  </span>{" "}
                                  <span className="wrap-break-word">
                                    {boxLang?.text || box?.text}
                                  </span>{" "}
                                  {(boxLang?.bold || box?.bold) && (
                                    <b className="wrap-break-word">
                                      {boxLang?.bold || box?.bold}
                                    </b>
                                  )}{" "}
                                  <span className="wrap-break-word">
                                    {boxLang?.suffix || box?.suffix}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* layout 3: media-layout */}
                  {step?.type === "media-layout" && (
                    <div className="grid items-start lg:items-center gap-6 lg:grid-cols-12 w-full min-w-0">
                      <div className="lg:col-span-7 w-full min-w-0">
                        <h3
                          className={`mt-4 text-xl font-bold text-[#042451] sm:text-2xl wrap-break-word ${
                            lang === "th" ? "looped-text" : ""
                          }`}
                        >
                          {stepTitle || stepLang?.mediaTitle2}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#183153] wrap-break-word">
                          {stepLang?.text2}
                        </p>
                      </div>

                      <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-4 shadow-sm w-full min-w-0">
                        {stepLang?.mediaTitle1 && (
                          <p
                            className={`text-sm font-bold text-center text-[#042451] wrap-break-word ${
                              lang === "th" ? "looped-text" : ""
                            }`}
                          >
                            {stepLang.mediaTitle1}
                          </p>
                        )}

                        {stepLang?.mediaTitle2 && (
                          <p
                            className={`text-sm font-bold text-center text-[#042451] wrap-break-word ${
                              lang === "th" ? "looped-text" : ""
                            }`}
                          >
                            {stepLang.mediaTitle2}
                          </p>
                        )}

                        {renderMediaContent(step)}
                      </div>
                    </div>
                  )}

                  {/* layout 4: columns-3 */}
                  {step?.type === "columns-3" && (
                    <div className="w-full min-w-0">
                      <h3
                        className={`mt-4 text-lg sm:text-xl font-bold text-[#042451] wrap-break-word ${
                          lang === "th" ? "looped-text" : ""
                        }`}
                      >
                        {stepTitle}
                      </h3>
                      {step?.desc && (
                        <p className="mt-2 text-sm text-gray-500 wrap-break-word">
                          {step.desc}
                        </p>
                      )}

                      {Array.isArray(step?.columns) && (
                        <div className="grid gap-4 mt-5 grid-cols-1 sm:grid-cols-3 w-full">
                          {step.columns.map((col, cIdx) => {
                            const colLang =
                              col?.[currentLang] || col?.["th"] || col;
                            return (
                              <div
                                key={cIdx}
                                className={`p-4 sm:p-5 rounded-2xl border transition-all wrap-break-word ${
                                  col?.bgClass ||
                                  "bg-gray-50/50 border-gray-100"
                                }`}
                              >
                                <p className="font-bold text-center text-sm sm:text-base mb-2 wrap-break-word">
                                  {colLang?.title || col?.title}
                                </p>
                                <p className="text-center text-xs sm:text-sm opacity-90 leading-relaxed wrap-break-word">
                                  {colLang?.desc || col?.desc}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ */}
          {Array.isArray(localizedContent?.faqs) &&
            localizedContent.faqs.length > 0 && (
              <div className="rounded-3xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8 md:p-10 overflow-hidden">
                <h3
                  className={`text-xl font-bold text-[#042451] sm:text-2xl wrap-break-word ${
                    lang === "th" ? "looped-text" : ""
                  }`}
                >
                  {localizedContent?.faqSectionTitle || "FAQs"}
                </h3>
                <div className="mt-6 space-y-4">
                  {localizedContent.faqs.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-gray-100 bg-[#fafcff] p-4 sm:p-5 wrap-break-word"
                    >
                      <p className="text-sm sm:text-base font-bold text-[#042451] wrap-break-word">
                        {item?.q}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600 wrap-break-word">
                        {item?.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* CTA */}
          <div
            className={`rounded-3xl bg-linear-to-b ${currentTheme.ctaBg} p-5 text-center text-white sm:p-10 lg:p-14 shadow-xl overflow-hidden`}
          >
            <h2
              className={`text-xl font-bold sm:text-3xl lg:text-4xl wrap-break-word ${
                lang === "th" ? "looped-text" : ""
              }`}
            >
              {localizedContent?.ctaTitle}
            </h2>
            <div className="mx-auto mt-4 max-w-3xl space-y-3 text-xs sm:text-base text-gray-100 leading-relaxed wrap-break-word">
              <p>{localizedContent?.ctaText3}</p>
            </div>
            <div className="mt-8 flex justify-center px-2">
              <Link
                href={langPath(blogData?.ctaLink || "/contactUs")}
                className="w-full max-w-md rounded-full bg-[#F7C94B] px-6 py-3.5 text-center text-sm sm:text-lg font-bold text-[#042451] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd86f] wrap-break-word"
              >
                {localizedContent?.ctaButtonText || "ติดต่อเรา"}
              </Link>
            </div>
            {localizedContent?.ctaFooterText && (
              <p
                className={`mt-6 text-sm sm:text-lg font-semibold text-[#F7C94B] wrap-break-word ${
                  lang === "th" ? "looped-text" : ""
                }`}
              >
                {localizedContent?.ctaFooterText}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicBlogContent;
