"use client";

import "./style.css";
import Link from "next/link";
import { useLanguage } from "@/hook/useLanguage";
import fun from "../../../assets/others/fun.webp";
import Image from "next/image";

const ParentsPage = () => {
  const { langPath, dict, lang } = useLanguage();

  return (
    <>
      <div className="trends-thai min-h-screen overflow-x-hidden bg-gradient-to-b from-[#ffecf8] via-[#f8fffa] to-white font-comfortaa">
        {/* HERO */}
        <section className="relative px-4 pb-12 pt-16 sm:px-6 sm:pt-20 md:px-10 md:pt-24 lg:px-16 xl:px-20">
          <div className="mx-auto mt-8 w-full max-w-5xl text-center md:mt-0">
            <div className="inline-flex items-center rounded-full bg-[#f8dff4] px-4 py-2 text-sm font-semibold text-[#ff54da] shadow-sm">
              {dict.Blogs_Parent_1}
            </div>

            <h1
              className={`mx-auto mt-6 max-w-4xl text-2xl font-bold leading-snug text-[#042451] sm:text-3xl md:text-4xl lg:text-5xl ${lang === "th" ? "looped-text" : ""}`}
            >
              {dict.Blogs_Parent_2}
              <span className="text-slate-500 mt-2 block text-xl font-normal sm:text-2xl md:text-3xl">
                {dict.Blogs_Parent_21}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              {dict.Blogs_Parent_3}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            {/* INTRO CARD */}
            <div className="rounded-[28px] bg-white p-6 shadow-[0_15px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:p-12">
              <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                <div>
                  <h2
                    className={`text-2xl ${
                      lang === "th" ? "looped-text" : ""
                    } font-bold leading-tight text-[#042451] sm:text-3xl`}
                  >
                    {dict.Blogs_Parent_4}
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                    {dict.Blogs_Parent_5}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="rounded-full bg-[#eaf8ec] px-4 py-2 text-sm font-semibold text-green-700">
                      {dict.Blogs_Parent_6}
                    </div>
                    <div className="rounded-full bg-[#eef4ff] px-4 py-2 text-sm font-semibold text-blue-700">
                      {dict.Blogs_Parent_7}
                    </div>
                    <div className="rounded-full bg-[#fff2df] px-4 py-2 text-sm font-semibold text-orange-600">
                      {dict.Blogs_Parent_8}
                    </div>
                  </div>
                </div>

                {/* CHECKLIST SIDE */}
                <div className="rounded-3xl bg-gradient-to-br from-[#d993c0] to-[#f0b8e4] p-5 shadow-xl sm:p-6 md:p-8">
                  <div className="space-y-3">
                    <div className="rounded-2xl bg-white/90 p-4 text-center shadow-sm">
                      <p
                        className={`text-lg font-bold ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                      >
                        {dict.Blogs_Parent_9}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm transition-all hover:bg-white">
                      <p
                        className={`text-sm font-medium sm:text-base ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                      >
                        {dict.Blogs_Parent_10}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm transition-all hover:bg-white">
                      <p
                        className={`text-sm font-medium sm:text-base ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                      >
                        {dict.Blogs_Parent_11}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm transition-all hover:bg-white">
                      <p
                        className={`text-sm font-medium sm:text-base ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                      >
                        {dict.Blogs_Parent_12}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm transition-all hover:bg-white">
                      <p
                        className={`text-sm font-medium sm:text-base ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                      >
                        {dict.Blogs_Parent_13}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm transition-all hover:bg-white">
                      <p
                        className={`text-sm font-medium sm:text-base ${lang === "th" ? "looped-text" : ""} text-[#042451]`}
                      >
                        {dict.Blogs_Parent_14}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CHECK SECTION */}
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {/* CHECK 1 */}
              <div className="flex flex-col justify-between rounded-[28px] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div>
                  <div className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-yellow-700">
                    Check 1
                  </div>
                  <h3
                    className={`mt-4 text-xl sm:text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}
                  >
                    {dict.Blogs_Parent_15}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_16}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_17}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_18}{" "}
                    <strong>{dict.Blogs_Parent_19}</strong>
                    {dict.Blogs_Parent_20}
                  </p>
                </div>
              </div>

              {/* CHECK 2 */}
              <div className="flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#ffe7f6] to-[#fbcbf3] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div>
                  <div className="inline-flex rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-pink-700 shadow-sm">
                    Check 2
                  </div>
                  <h3
                    className={`mt-4 text-xl sm:text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}
                  >
                    {dict.Blogs_Parent_22}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_23}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_24}{" "}
                    <strong>{dict.Blogs_Parent_25}</strong>{" "}
                    {dict.Blogs_Parent_26}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_27}
                  </p>
                </div>
              </div>

              {/* CHECK 3 */}
              <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-8 md:col-span-2">
                {/* Badge */}
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                  Check 3
                </div>

                {/* Main Layout */}
                <div className="mt-6 flex flex-col items-center gap-8 lg:flex-row lg:items-start">
                  {/* Left Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-2xl leading-snug sm:text-3xl ${
                        lang === "th" ? "looped-text" : ""
                      } font-bold text-[#042451] transition-colors duration-300`}
                    >
                      {dict.Blogs_Parent_28}
                    </h3>

                    <div className="mt-5 space-y-4">
                      <p className="rounded-2xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-600 shadow-sm transition-all duration-300 hover:bg-blue-50 sm:text-base">
                        {dict.Blogs_Parent_29}{" "}
                        <strong className="font-bold">
                          {dict.Blogs_Parent_30}
                        </strong>
                      </p>

                      <p className="rounded-2xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-600 shadow-sm transition-all duration-300 hover:bg-blue-50 sm:text-base">
                        {dict.Blogs_Parent_31}
                      </p>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative w-full max-w-[180px] flex-shrink-0">
                    <div className="overflow-hidden rounded-3xl shadow-lg">
                      <Image
                        src={fun}
                        alt="Fun Learning"
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-blue-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
                  </div>
                </div>
              </div>

              {/* CHECK 4 */}
              <div className="flex flex-col justify-between rounded-[28px] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div>
                  <div className="inline-flex rounded-full bg-pink-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-pink-700">
                    Check 4
                  </div>
                  <h3
                    className={`mt-4 text-xl sm:text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}
                  >
                    {dict.Blogs_Parent_32}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_33}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_34}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_35}
                  </p>
                </div>
              </div>

              {/* CHECK 5 */}
              <div className="flex flex-col justify-between rounded-[28px] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div>
                  <div className="inline-flex rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-green-700">
                    Check 5
                  </div>
                  <h3
                    className={`mt-4 text-xl sm:text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}
                  >
                    {dict.Blogs_Parent_36}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_37}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {dict.Blogs_Parent_38}
                  </p>
                </div>
              </div>
            </div>

            {/* CHALLENGE */}
            <div className="mt-14 rounded-[32px] bg-gradient-to-r from-[#d24163] to-[#ffb19b] p-8 text-center text-white shadow-xl md:p-12">
              <h3
                className={`text-2xl sm:text-3xl ${lang === "th" ? "looped-text" : ""} font-bold`}
              >
                {dict.Blogs_Parent_39}
              </h3>
            </div>

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

            {/* CTA */}
            <div className="mt-20 px-4 text-center">
              <h2
                className={`text-3xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] md:text-5xl`}
              >
                {dict.Blogs_Parent_40}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
                {dict.Blogs_Parent_41} <strong>{dict.Blogs_Parent_42}</strong>{" "}
                {dict.Blogs_Parent_43}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={langPath("/contactUs")}
                  className="w-full min-w-[280px] rounded-full bg-[#F7C94B] px-8 py-4 text-center text-lg font-bold text-[#042451] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd86f] hover:shadow-xl active:translate-y-0 sm:w-auto sm:min-w-[340px]"
                >
                  {dict.Blogs_Parent_44}
                </Link>
              </div>

              <p
                className={`mt-8 text-lg sm:text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-amber-500`}
              >
                {dict.Blogs_Parent_45}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ParentsPage;
