"use client";

import "./style.css";
import Link from "next/link";
import { useLanguage } from "@/hook/useLanguage";
import Image from "next/image";
import cat from "../../../assets/logos/cat.webp"
import bloxk from "../../../assets/logos/bloxk.webp"
import move from "../../../assets/logos/move.webp"

const ScratchPage = () => {
  const {dict, lang, langPath} = useLanguage();

  return (
    <>
      <div className="font-comfortaa trends-thai min-h-screen bg-gradient-to-b from-[#eeffec] via-[#f8fffa] to-white overflow-hidden">
        {/* HERO */}
        <section className="relative px-4 pt-24 pb-14 sm:px-6 md:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center rounded-full bg-[#dff8e1] px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
              {dict.Blogs_Scratch_1}
            </div>

            <h1 className={`mx-auto ${lang === "th" ? "looped-text" : ""} mt-6 max-w-4xl text-3xl font-bold leading-tight text-[#042451] sm:text-4xl md:text-5xl`}>
              {dict.Blogs_Scratch_2}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-2xl">
              {dict.Blogs_Scratch_3}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">

            {/* INTRO CARD */}
            <div className="rounded-[32px] bg-white p-6 shadow-[0_15px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className={`text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] md:text-3xl`}>
                    {dict.Blogs_Scratch_4}
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-gray-700 md:text-lg">
                    {dict.Blogs_Scratch_5}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="rounded-full bg-[#eaf8ec] px-4 py-2 text-sm font-semibold text-green-700">
                      {dict.Blogs_Scratch_6}
                    </div>

                    <div className="rounded-full bg-[#eef4ff] px-4 py-2 text-sm font-semibold text-blue-700">
                      {dict.Blogs_Scratch_7}
                    </div>

                    <div className="rounded-full bg-[#fff2df] px-4 py-2 text-sm font-semibold text-orange-600">
                      {dict.Blogs_Scratch_8}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-[#93d99a] to-[#b8f0be] p-8 shadow-xl">
                  <div className="space-y-5">
                    <div className="rounded-2xl bg-white/80 p-4">
                      <p className={`font-bold ${lang === "th" ? "looped-text" : ""} text-[#042451]`}>
                        {dict.Blogs_Scratch_9}
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        {dict.Blogs_Scratch_10}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/80 p-4">
                      <p className={`font-bold ${lang === "th" ? "looped-text" : ""} text-[#042451]`}>
                        {dict.Blogs_Scratch_11}
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        {dict.Blogs_Scratch_12}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/80 p-4">
                      <p className={`font-bold ${lang === "th" ? "looped-text" : ""} text-[#042451]`}>
                        {dict.Blogs_Scratch_13}
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        {dict.Blogs_Scratch_14}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/80 p-4">
                      <p className={`font-bold ${lang === "th" ? "looped-text" : ""} text-[#042451]`}>
                        {dict.Blogs_Scratch_15}
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        {dict.Blogs_Scratch_16}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP SECTION */}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">

              {/* STEP 1 */}
              <div className="rounded-[28px] bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8">
                <div className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
                  STEP 1
                </div>

                <h3 className={`mt-5 text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}>
                  {dict.Blogs_Scratch_7}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {dict.Blogs_Scratch_18} <a className="text-light-green-600 underline" href="https://scratch.mit.edu/">scratch.mit.edu</a> {dict.Blogs_Scratch_19} <a className="text-light-green-600" href="https://scratch.mit.edu/">{dict.Blogs_Scratch_20}</a> {dict.Blogs_Scratch_21}
                </p>
              </div>

              {/* STEP 2 */}
              <div className="rounded-[28px] bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8">
                <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  STEP 2
                </div>

                <h3 className={`mt-5 text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}>
                  {dict.Blogs_Scratch_22}
                </h3>

                <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center">

                  {/* TEXT */}
                  <div className="flex-auto">
                    <p className="leading-relaxed text-gray-700 text-sm md:text-base">
                      {dict.Blogs_Scratch_23}
                    </p>

                    <div className="inline-flex rounded-xl bg-[#eef4ff] p-1 shadow-sm">
                      <Image
                        src={move}
                        alt="move 10 steps block"
                        className="h-auto w-full max-w-[260px] object-contain"
                      />
                    </div>

                    <p className="leading-relaxed text-gray-700 text-sm md:text-base">
                      {dict.Blogs_Scratch_24}
                      <span className="font-semibold text-[#042451]">
                        {" "}
                        {dict.Blogs_Scratch_25}
                      </span>
                    </p>
                  </div>

                </div>
              </div>

              {/* STEP 3 */}
              <div className="rounded-[28px] bg-gradient-to-br from-[#93d99a] to-[#bff1c4] p-6 shadow-xl md:p-8 lg:col-span-2">
                <div className="grid items-center gap-10 lg:grid-cols-2">

                  <div>
                    <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-green-700">
                      STEP 3
                    </div>

                    <h3 className={`mt-5 text-3xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}>
                      {dict.Blogs_Scratch_26}
                    </h3>

                    <p className="mt-5 leading-relaxed text-[#183153]">
                      {dict.Blogs_Scratch_27}
                    </p>

                    <div className="mt-6 rounded-2xl bg-white/80 p-5">
                      <p className="font-semibold text-[#042451]">
                        {dict.Blogs_Scratch_28}
                      </p>

                      <p className="mt-2 text-sm text-gray-700">
                        {dict.Blogs_Scratch_29}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white p-6 shadow-xl">
                    <Image
                      src={cat}
                      alt="Scratch Cat"
                      className="w-32 object-contain sm:w-40"
                    />

                    <Image
                      src={bloxk}
                      alt="Scratch Block"
                      className="w-full max-w-[260px] rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="rounded-[28px] bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8 lg:col-span-2">
                <div className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700">
                  STEP 4
                </div>

                <h3 className={`mt-5 text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451]`}>
                  {dict.Blogs_Scratch_30}
                </h3>

                <p className="mt-4 max-w-4xl leading-relaxed text-gray-700">
                  {dict.Blogs_Scratch_31}
                </p>
              </div>
            </div>

            {/* CHALLENGE */}
            <div className="mt-14 rounded-[32px] bg-gradient-to-r from-[#7ea9ff] to-[#9bc0ff] p-8 text-white shadow-2xl md:p-12">
              <h3 className={`text-3xl ${lang === "th" ? "looped-text" : ""} font-bold`}>
                {dict.Blogs_Scratch_32}
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
                {dict.Blogs_Scratch_33}
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-16 rounded-[32px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:p-10">
              <h3 className={`flex items-center gap-3 text-2xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] md:text-3xl`}>
                {dict.Blogs_Scratch_34}
              </h3>

              <div className="mt-10 space-y-8">

                <div className="rounded-2xl border border-gray-100 bg-[#fafcff] p-5">
                  <p className="text-lg font-bold text-[#042451]">
                    {dict.Blogs_Scratch_35}
                  </p>

                  <p className="mt-3 leading-relaxed text-gray-700">
                    {dict.Blogs_Scratch_36}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#fafcff] p-5">
                  <p className="text-lg font-bold text-[#042451]">
                    {dict.Blogs_Scratch_37}
                  </p>

                  <p className="mt-3 leading-relaxed text-gray-700">
                    {dict.Blogs_Scratch_38}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#fafcff] p-5">
                  <p className="text-lg font-bold text-[#042451]">
                    {dict.Blogs_Scratch_39}
                  </p>

                  <p className="mt-3 leading-relaxed text-gray-700">
                    {dict.Blogs_Scratch_40}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <h2 className={`text-3xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#042451] md:text-5xl`}>
                {dict.Blogs_Scratch_41}
              </h2>

              <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-700">
                {dict.Blogs_Scratch_42}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={langPath("/courses/blockcode/scratch")}
                  className="w-full max-w-[350px] rounded-full bg-[#F7C94B] px-6 py-4 text-center text-lg font-bold text-[#042451] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd86f]"
                >
                  {dict.Blogs_Scratch_43}
                </Link>

                <Link
                  href={langPath("/courses")}
                  className="w-full max-w-[280px] rounded-full bg-[#042451] px-6 py-4 text-center text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#06346d]"
                >
                  {dict.Blogs_Scratch_44}
                </Link>
              </div>

              <p className={`mt-8 text-xl ${lang === "th" ? "looped-text" : ""} font-bold text-[#F7C94B]`}>
                {dict.Blogs_Scratch_45}
              </p>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ScratchPage;
