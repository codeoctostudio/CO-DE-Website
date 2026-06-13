"use client";

import "./style.css";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/hook/useLanguage";

const TrendsContent = () => {
  const { langPath, dict, lang, router, searchParams } = useLanguage();
  const isThai = lang === "th";
  const activeTab = searchParams.get("tab") || "all";

  const handleTabChange = (key) => {
    router.push(`?tab=${key}`, { scroll: false });
  };

  const tabs = [
    { key: "all", label: dict.category_all },
    { key: "parents", label: dict.category_parents },
    { key: "tutorials", label: dict.category_tutorials },
    { key: "tech", label: dict.category_tech },
    { key: "guide", label: dict.category_guide },
    { key: "student", label: dict.category_student_works },
  ];

  const categories = {
    tutorials: {
      label: dict.category_tutorials,
      color: "from-green-100 to-green-200",
      tag: "bg-green-100 text-green-700",
      icon: "🧩",
    },
    parents: {
      label: dict.category_parents,
      color: "from-pink-100 to-pink-200",
      tag: "bg-pink-100 text-pink-700",
      icon: "👨‍👩‍👧",
    },
    tech: {
      label: dict.category_tech,
      color: "from-blue-100 to-blue-200",
      tag: "bg-blue-100 text-blue-700",
      icon: "🤖",
    },
    guide: {
      label: dict.category_guide,
      color: "from-orange-100 to-orange-200",
      tag: "bg-orange-100 text-orange-700",
      icon: "🎓",
    },
  };

  // บทความ
  const articles = [
    {
      title: (
        <>
          {dict.Blogs_Parent_2}
          {!isThai && <br />}
          {!isThai && dict.Blogs_Parent_21}
          {isThai && " " + dict.Blogs_Parent_21}
        </>
      ),
      content: dict.Blogs_Parent_3,
      meta: dict.blogs_8,
      category: "parents",
      slug: "/blogs/parents/how-to-choose-coding-school-for-kids",
      featured: true,
    },
    {
      title: dict.Blogs_Scratch_2,
      content: dict.Blogs_Scratch_3,
      meta: dict.Blogs_Scratch_46,
      category: "tutorials",
      slug: "/blogs/tutorials/why-kids-should-learn-scratch",
      featured: true,
    },
    {
      title: dict.blogs_5,
      meta: dict.blogs_7,
      category: "parents",
      slug: "/blogs/parents/why-kids-should-learn-python",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const featuredArticle = articles.find((article) => article.featured);

  const getLatestArticles = (articles, featuredArticle) => {
    const latest = [];
    const usedCategories = new Set();

    for (const article of articles) {
      // ข้าม featured
      if (article === featuredArticle) continue;

      // category นี้ยังไม่ถูกใช้
      if (!usedCategories.has(article.category)) {
        latest.push(article);
        usedCategories.add(article.category);
      }
    }

    return latest;
  };

  const getOldArticles = (articles, featuredArticle, latestArticles) => {
    return articles.filter((article) => {
      // ตัด featured
      if (article === featuredArticle) return false;

      // ตัด latest articles
      if (latestArticles.includes(article)) return false;

      return true;
    });
  };

  const parentArticles = articles.filter(
    (article) => article.category === "parents",
  );
  const tutorialsArticles = articles.filter(
    (article) => article.category === "tutorials",
  );
  const techArticles = articles.filter(
    (article) => article.category === "tech",
  );
  const guideArticles = articles.filter(
    (article) => article.category === "guide",
  );

  // รางวัลนักเรียน (สมมติข้อมูล)
  const studentWorks = [
    {
      title: dict.Blogs_Student_1,
      meta: dict.Blogs_Student_2,
    },
    {
      title: dict.Blogs_Student_3,
      meta: dict.Blogs_Student_4,
    },
  ];

  const [studentPage, setStudentPage] = useState(1);
  const STUDENT_PER_PAGE = 4;

  const startStudentIndex = (studentPage - 1) * STUDENT_PER_PAGE;

  const latestArticles = getLatestArticles(articles, featuredArticle);

  const oldArticles = getOldArticles(articles, featuredArticle, latestArticles);

  const totalPages = Math.ceil(oldArticles.length / ITEMS_PER_PAGE);

  const currentOldArticles = oldArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const totalStudentPages = Math.ceil(studentWorks.length / STUDENT_PER_PAGE);

  const currentStudentWorks = studentWorks.slice(
    startStudentIndex,
    startStudentIndex + STUDENT_PER_PAGE,
  );

  return (
    <main className="font-comfortaa">
      {/* HEADER */}
      <div className="bg-gradient-to-b from-[#0B2545] to-[#071f3d] px-4 py-10 sm:px-6 md:px-12 lg:px-20">
        {/* BADGE */}
        <div className="mb-4 mt-16 w-fit rounded-full bg-[#F7C94B] px-4 py-1 text-sm font-bold text-[#042451] shadow-md transition hover:bg-[#EA5880] sm:text-base">
          Imagination Insight
        </div>

        {/* TITLE */}
        <h1
          className={`mb-6 text-left font-extrabold leading-relaxed tracking-wide text-white ${lang === "th" ? "looped-text" : ""}`}
        >
          <span className="block text-lg sm:text-xl md:inline md:text-2xl lg:text-3xl">
            {dict.blogs_1}
          </span>

          <span className="block text-sm text-white/95 sm:text-base md:ml-2 md:inline md:text-2xl lg:text-3xl">
            {dict.blogs_2}
          </span>
        </h1>

        {/* TAB MENU */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`rounded-lg border px-4 py-2 text-sm font-bold transition sm:px-5 sm:text-base
                ${
                  activeTab === tab.key
                    ? "border-[#0B2545] bg-[#F7C94B] text-[#0B2545] shadow-md"
                    : "border-[#1E3A8A] bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <div className="mx-auto max-w-full">
          {/* TAB 1 */}
          {activeTab === "all" && (
            <div className="px-4 py-10 md:px-12 lg:px-20">
              <h2
                className={`-mt-2 mb-4 flex items-center gap-2 text-lg font-bold text-[#042451] md:mt-4 ${lang === "th" ? "looped-text" : ""}`}
              >
                <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                {dict.Blogs_All_1}
              </h2>
              <Link href={langPath(featuredArticle.slug)}>
                <div className="h-auto overflow-hidden rounded-xl bg-white shadow-lg transition hover:scale-[1.02] md:h-64">
                  {/* TOP */}
                  <div className="flex flex-col bg-[#042451] text-white md:flex-row">
                    {/* TEXT 75% */}
                    <div
                      className={`w-full p-4 md:w-[75%] md:p-5 ${lang === "th" ? "looped-text" : ""}`}
                    >
                      <div className="inline-block rounded-full bg-pink-400 px-3 py-1 text-xs">
                        {dict.category_parents}
                      </div>

                      <div className="mt-4  line-clamp-2 font-semibold leading-relaxed">
                        {featuredArticle.title}
                      </div>
                    </div>

                    {/* IMOGI 25% */}
                    <div className="flex w-full items-center justify-center p-4 md:w-[25%]">
                      <div className="flex aspect-square w-24 items-center justify-center overflow-hidden rounded-lg text-4xl sm:w-16 md:w-28 md:text-6xl">
                        👨‍👩‍👧
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex h-auto flex-col justify-between p-4 md:h-1/2">
                    <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                      {featuredArticle.content}
                    </p>
                    <p className="mb-4 text-xs text-gray-500">
                      {featuredArticle.meta}
                    </p>
                  </div>
                </div>
              </Link>

              {/* คำถาม */}
              {/* FAQ */}
              <div className="mt-16 rounded-[32px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <h3
                  className={`flex items-center gap-3 text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] md:text-3xl`}
                >
                  {dict.Faq_parent_1}
                </h3>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-gray-100 bg-[#fafcff] p-5 transition-colors hover:bg-blue-50/30">
                    <p className="text-base font-bold text-[#042451] sm:text-lg">
                      {dict.Faq_parent_2}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {dict.Faq_parent_3}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-[#fafcff] p-5 transition-colors hover:bg-blue-50/30">
                    <p className="text-base font-bold text-[#042451] sm:text-lg">
                      {dict.Faq_parent_4}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {dict.Faq_parent_5}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-[#fafcff] p-5 transition-colors hover:bg-blue-50/30">
                    <p className="text-base font-bold text-[#042451] sm:text-lg">
                      {dict.Faq_parent_6}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {dict.Faq_parent_7}
                    </p>
                  </div>
                </div>
              </div>

              {/* บทความล่าสุด */}
              <h2
                className={`mb-4 mt-10 flex items-center gap-2 text-lg font-bold text-[#042451] ${lang === "th" ? "looped-text" : ""}`}
              >
                <span className="h-2 w-2 rounded-full bg-blue-700"></span>
                {dict.Blogs_All_2}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {latestArticles.map((item) => {
                  const cat = categories[item.category];

                  return (
                    <Link
                      key={`${item.category}-${item.title}`}
                      href={langPath(item.slug)}
                    >
                      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                        {/* TOP */}
                        <div
                          className={`flex h-24 items-center justify-center bg-gradient-to-r sm:h-28 ${cat.color}`}
                        >
                          <div className="text-2xl sm:text-3xl">{cat.icon}</div>
                        </div>

                        {/* BOTTOM */}
                        <div className="flex flex-1 flex-col p-4">
                          <span
                            className={`inline-block w-fit rounded-md px-2 py-1 text-xs font-bold ${cat.tag}`}
                          >
                            {cat.label}
                          </span>

                          <h3 className="mt-2 line-clamp-2 text-sm font-bold text-[#0B2545] sm:text-base">
                            {item.title}
                          </h3>

                          <p className="mt-auto text-xs text-gray-500">
                            {item.meta}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* บทความเก่า */}
              <h2
                className={`mb-4 mt-10 flex items-center gap-2 text-lg font-bold text-[#042451] ${lang === "th" ? "looped-text" : ""}`}
              >
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                {dict.Blogs_All_3}
              </h2>
              <div className="space-y-4">
                {currentOldArticles.map((item) => {
                  const cat = categories[item.category];

                  return (
                    <Link
                      key={`${item.category}-${item.title}`}
                      href={langPath(item.slug)}
                    >
                      <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        {/* LEFT */}
                        <div className="flex items-center gap-4">
                          {/* ICON */}
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${cat.color}`}
                          >
                            <span className="text-xl">{cat.icon}</span>
                          </div>

                          {/* TEXT */}
                          <div>
                            <h3 className="line-clamp-1 text-sm font-semibold text-[#0B2545] sm:text-base">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                              <span
                                className={`font-bold ${cat.tag} rounded-lg px-2 py-1`}
                              >
                                {cat.label}
                              </span>
                              <span className="mx-2">·</span>
                              {item.meta}
                            </p>
                          </div>
                        </div>

                        {/* RIGHT ARROW */}
                        <div className="text-lg text-gray-400">→</div>
                      </div>
                    </Link>
                  );
                })}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {/* Prev */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className="rounded-lg bg-gray-200 px-3 py-1 hover:bg-gray-300"
                  >
                    {dict.Page_Prev}
                  </button>

                  {/* Numbers */}
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentPage(i + 1);
                      }}
                      className={`rounded-lg px-3 py-1 font-bold transition
                        ${
                          currentPage === i + 1
                            ? "bg-[#F7C94B] text-[#0B2545]"
                            : "border bg-white hover:bg-gray-100"
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    className="rounded-lg bg-gray-200 px-3 py-1 hover:bg-gray-300"
                  >
                    {dict.Page_Next}
                  </button>
                </div>
              </div>

              {/* ผลงานนักเรียน */}
              <h2
                className={`mb-4 mt-10 flex items-center gap-2 text-lg font-bold text-[#042451] ${lang === "th" ? "looped-text" : ""}`}
              >
                <span className="h-2 w-2 rounded-full bg-yellow-600"></span>
                {dict.Blogs_All_4} CO-DE
              </h2>
              <div className="space-y-4">
                {currentStudentWorks.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                      {/* ICON (รางวัล) */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-200">
                        <span className="text-xl">🏆</span>
                      </div>

                      {/* TEXT */}
                      <div>
                        <h3 className="line-clamp-1 text-sm font-semibold text-[#0B2545] sm:text-base">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          <span className="rounded bg-yellow-100 px-2 py-0.5 font-bold text-yellow-700">
                            {dict.Blogs_All_4}
                          </span>
                          <span className="mx-2">·</span>
                          {item.meta}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="text-lg text-gray-400">→</div>
                  </div>
                ))}

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {/* Prev */}
                  <button
                    onClick={() => setStudentPage((p) => Math.max(p - 1, 1))}
                    className="rounded-lg bg-gray-200 px-3 py-1 hover:bg-gray-300"
                  >
                    {dict.Page_Prev}
                  </button>

                  {/* Numbers */}
                  {[...Array(totalStudentPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStudentPage(i + 1)}
                      className={`rounded-lg px-3 py-1 font-bold transition
                        ${
                          studentPage === i + 1
                            ? "bg-[#F7C94B] text-[#0B2545]"
                            : "border bg-white hover:bg-gray-100"
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    onClick={() =>
                      setStudentPage((p) => Math.min(p + 1, totalStudentPages))
                    }
                    className="rounded-lg bg-gray-200 px-3 py-1 hover:bg-gray-300"
                  >
                    {dict.Page_Next}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 */}
          {activeTab === "parents" && (
            <div className="bg-gradient-to-b from-[#ffecf8] via-[#f8fffa] to-white px-4 md:px-12 lg:px-20">
              <div className="mx-auto mb-5 max-w-6xl">
                {/* HEADER */}
                <div className="mb-10 text-center">
                  <div className="mt-5 inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700 shadow-sm">
                    👨‍👩‍👧 {dict.category_parents}
                  </div>

                  <h2
                    className={`mt-5 text-3xl font-extrabold text-[#042451] md:text-5xl ${
                      lang === "th" ? "looped-text" : ""
                    }`}
                  >
                    {dict.Tab_Parent_1}
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
                    {dict.Tab_Parent_2}
                  </p>
                </div>

                {/* FEATURED */}
                {parentArticles
                  .filter((article) => article.featured)
                  .map((item) => (
                    <Link key={item.slug} href={langPath(item.slug)}>
                      <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#042451] via-[#12396b] to-[#0B2545] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                        {/* BG */}
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
                          {/* LEFT */}
                          <div className="flex-1 text-white">
                            <div className="inline-flex items-center rounded-full bg-pink-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                              {dict.category_parents}
                            </div>

                            <h3
                              className={`mt-5 text-2xl font-bold leading-snug md:text-4xl ${
                                lang === "th" ? "looped-text" : ""
                              }`}
                            >
                              {item.title}
                            </h3>

                            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                              {item.meta}
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F7C94B]">
                              {dict.Tab_Parent_3} →
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="flex items-center justify-center">
                            <div className="flex h-36 w-36 items-center justify-center rounded-[30px] bg-white/10 text-7xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                              👨‍👩‍👧
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}

                {/* GRID */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  {parentArticles
                    .filter((article) => !article.featured)
                    .map((item, index) => (
                      <Link key={item.slug} href={langPath(item.slug)}>
                        <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-pink-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          {/* TOP */}
                          <div className="via-rose-50 relative overflow-hidden bg-gradient-to-br from-pink-100 to-white p-8">
                            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-pink-200/40 blur-2xl"></div>

                            <div className="relative z-10 flex items-center justify-between">
                              <div className="rounded-full bg-pink-500 px-4 py-1 text-xs font-bold text-white shadow">
                                {dict.category_parents}
                              </div>

                              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                                {index % 2 === 0 ? "🧠" : "🚀"}
                              </div>
                            </div>
                          </div>

                          {/* CONTENT */}
                          <div className="flex flex-1 flex-col p-6">
                            <h3
                              className={`line-clamp-2 text-xl font-bold leading-snug text-[#042451] transition-colors group-hover:text-pink-600 ${
                                lang === "th" ? "looped-text" : ""
                              }`}
                            >
                              {item.title}
                            </h3>

                            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                              {item.meta}
                            </p>

                            <div className="mt-6 flex items-center justify-between">
                              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700">
                                {dict.category_parents}
                              </span>

                              <span className="text-sm font-bold text-[#042451] transition-transform duration-300 group-hover:translate-x-1">
                                {dict.Tab_Parent_4} →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>

                {/* EMPTY */}
                {parentArticles.length === 0 && (
                  <div className="rounded-3xl bg-white p-14 text-center shadow-lg">
                    <div className="text-6xl">📚</div>

                    <h3 className="mt-5 text-2xl font-bold text-[#042451]">
                      ยังไม่มีบทความ
                    </h3>

                    <p className="mt-3 text-gray-500">
                      ระบบกำลังอัปเดตบทความใหม่เร็ว ๆ นี้
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3 */}
          {activeTab === "tutorials" && (
            <div className="bg-gradient-to-b from-[#eeffec] via-[#f8fffa] to-white px-4 md:px-12 lg:px-20">
              <div className="mx-auto mb-5 max-w-6xl">
                {/* HEADER */}
                <div className="mb-10 text-center">
                  <div className="mt-5 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700 shadow-sm">
                    🧩 {dict.category_tutorials}
                  </div>

                  <h2
                    className={`mt-5 text-3xl font-extrabold text-[#042451] md:text-5xl ${
                      lang === "th" ? "looped-text" : ""
                    }`}
                  >
                    {dict.Tab_Tutorials_1}
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
                    {dict.Tab_Parent_2}
                  </p>
                </div>

                {/* FEATURED */}
                {tutorialsArticles
                  .filter((article) => article.featured)
                  .map((item) => (
                    <Link key={item.slug} href={langPath(item.slug)}>
                      <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#042451] via-[#12396b] to-[#0B2545] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                        {/* BG */}
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
                          {/* LEFT */}
                          <div className="flex-1 text-white">
                            <div className="inline-flex items-center rounded-full bg-green-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                              {dict.category_tutorials}
                            </div>

                            <h3
                              className={`mt-5 text-2xl font-bold leading-snug md:text-4xl ${
                                lang === "th" ? "looped-text" : ""
                              }`}
                            >
                              {item.title}
                            </h3>

                            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                              {item.meta}
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F7C94B]">
                              {dict.Tab_Parent_3} →
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="flex items-center justify-center">
                            <div className="flex h-36 w-36 items-center justify-center rounded-[30px] bg-white/10 text-7xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                              🧩
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}

                {/* GRID */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  {tutorialsArticles
                    .filter((article) => !article.featured)
                    .map((item, index) => (
                      <Link key={item.slug} href={langPath(item.slug)}>
                        <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-pink-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          {/* TOP */}
                          <div className="via-rose-50 relative overflow-hidden bg-gradient-to-br from-pink-100 to-white p-8">
                            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-pink-200/40 blur-2xl"></div>

                            <div className="relative z-10 flex items-center justify-between">
                              <div className="rounded-full bg-pink-500 px-4 py-1 text-xs font-bold text-white shadow">
                                {dict.category_parents}
                              </div>

                              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                                {index % 2 === 0 ? "🧠" : "🚀"}
                              </div>
                            </div>
                          </div>

                          {/* CONTENT */}
                          <div className="flex flex-1 flex-col p-6">
                            <h3
                              className={`line-clamp-2 text-xl font-bold leading-snug text-[#042451] transition-colors group-hover:text-pink-600 ${
                                lang === "th" ? "looped-text" : ""
                              }`}
                            >
                              {item.title}
                            </h3>

                            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                              {item.meta}
                            </p>

                            <div className="mt-6 flex items-center justify-between">
                              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700">
                                {dict.category_parents}
                              </span>

                              <span className="text-sm font-bold text-[#042451] transition-transform duration-300 group-hover:translate-x-1">
                                {dict.Tab_Parent_4} →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>

                {/* EMPTY */}
                {tutorialsArticles.length === 0 && (
                  <div className="rounded-3xl bg-white p-14 text-center shadow-lg">
                    <div className="text-6xl">📚</div>

                    <h3 className="mt-5 text-2xl font-bold text-[#042451]">
                      ยังไม่มีบทความ
                    </h3>

                    <p className="mt-3 text-gray-500">
                      ระบบกำลังอัปเดตบทความใหม่เร็ว ๆ นี้
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4 */}
          {activeTab === "tech" && (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-[#F7C94B]">Coming Soon</h2>
            </div>
          )}

          {/* TAB 5 */}
          {activeTab === "guide" && (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-[#F7C94B]">Coming Soon</h2>
            </div>
          )}

          {/* TAB 6 */}
          {activeTab === "student_works" && (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-[#F7C94B]">Coming Soon</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default TrendsContent;
