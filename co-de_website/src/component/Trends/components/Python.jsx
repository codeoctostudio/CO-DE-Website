import "./style.css";
import Link from "next/link";
import { useLanguage } from "@/hook/useLanguage";

const Python = () => {
  const { dict, lang, langPath } = useLanguage();

  return (
    <>
      <div className="font-comfortaa trends-thai min-h-screen bg-gradient-to-b from-[#0B2545] to-[#071f3d] px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-5xl mt-10 rounded-3xl bg-[#122A5E] p-6 text-white shadow-2xl sm:p-10 md:p-12 lg:p-16">
          {/* TITLE */}
          <h1
            className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} mb-8 text-center text-xl font-extrabold leading-relaxed tracking-wide text-[#F7C94B] drop-shadow-lg sm:text-2xl md:mb-10 md:text-3xl lg:text-4xl`}
          >
            <p className="-mb-1 md:mb-4">{dict.blogs_Recommend_1}</p>
            <p>{dict.blogs_Recommend_2}</p>
          </h1>

          {/* INTRO */}
          <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed tracking-wide text-gray-200 sm:text-lg md:mb-12 md:text-left md:text-xl">
            {dict.blogs_Recommend_3}
          </p>

          {/* LIST */}
          <ol className="mx-auto mb-12 max-w-3xl list-inside list-decimal space-y-6 text-base leading-relaxed tracking-wide text-[#F7C94B] sm:text-lg md:mb-16 md:space-y-8">
            <li>
              <strong
                className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} text-xl`}
              >
                {dict.blogs_Recommend_4}
              </strong>
              <p className="mt-2 text-gray-200">{dict.blogs_Recommend_5}</p>
            </li>

            <li>
              <strong
                className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} text-xl`}
              >
                {dict.blogs_Recommend_6}
              </strong>
              <p className="mt-2 text-gray-200">{dict.blogs_Recommend_7}</p>
            </li>

            <li>
              <strong
                className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} text-xl`}
              >
                {dict.blogs_Recommend_8}
              </strong>
              <p className="mt-2 text-gray-200">{dict.blogs_Recommend_9}</p>
            </li>

            <li>
              <strong
                className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} text-xl`}
              >
                {dict.blogs_Recommend_10}
              </strong>
              <p className="mt-2 text-gray-200">{dict.blogs_Recommend_11}</p>
            </li>

            <li>
              <strong
                className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} text-xl`}
              >
                {dict.blogs_Recommend_12}
              </strong>
              <p className="mt-2 text-gray-200">{dict.blogs_Recommend_13}</p>
            </li>
          </ol>

          {/* QUIZ SECTION */}
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl bg-[#00B0E6] p-6 text-center text-white shadow-xl transition-shadow hover:shadow-[0_0_20px_#00B0E6] sm:p-8 md:mb-12 md:rounded-3xl md:p-10">
            <h2
              className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} mb-4 text-xl font-semibold tracking-wide drop-shadow-md sm:text-2xl md:mb-5 md:text-3xl`}
            >
              {dict.blogs_Recommend_14}
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-sm tracking-wide sm:text-base md:mb-8 md:text-lg">
              {dict.blogs_Recommend_15}
            </p>

            <Link
              href={langPath("/unitytest")}
              target="_blank"
              rel="noopener noreferrer"
              className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} inline-block rounded-full bg-[#F7C94B] px-8 py-3 font-bold text-[#0B2545] shadow-md transition hover:bg-[#FFD84D] md:px-12 md:py-4`}
            >
              {dict.blogs_Recommend_16}
            </Link>
          </div>

          {/* CONTACT */}
          <div className="mx-auto max-w-3xl rounded-2xl bg-[#1F6E8C] p-6 text-white shadow-xl sm:p-8 md:rounded-3xl md:p-10">
            <h2
              className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} mb-5 text-center text-xl font-semibold tracking-wide drop-shadow-md sm:text-2xl md:mb-6 md:text-left md:text-3xl`}
            >
              {dict.blogs_Recommend_17}
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-sm tracking-wide sm:text-base md:mx-0 md:mb-8 md:text-lg">
              {dict.blogs_Recommend_18}
            </p>

            <ul className="mb-8 list-inside list-disc space-y-3 text-base leading-relaxed tracking-wide text-[#F7C94B] md:space-y-4 md:text-lg">
              <li>{dict.blogs_Recommend_19}</li>
              <li>{dict.blogs_Recommend_20}</li>
              <li>{dict.blogs_Recommend_21}</li>
              <li>{dict.blogs_Recommend_22}</li>
            </ul>

            <div className="space-y-2 text-sm sm:text-base">
              <p>
                {`${dict.blogs_Recommend_23}: `}
                <a
                  href="tel:0808300899"
                  className="underline hover:text-[#F7C94B]"
                >
                  080-830-0899
                </a>
              </p>

              <p>
                {`${dict.blogs_Recommend_24}: `}
                <a
                  href="https://www.co-deacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#F7C94B]"
                >
                  www.co-deacademy.com
                </a>
              </p>

              <p>
                {`${dict.blogs_Recommend_25}: `}
                <span className="font-bold">@co-de</span>
              </p>
            </div>
          </div>

          {/* FOOT */}
          <p
            className={`${lang === "th" ? "trends-thai" : "font-comfortaa"} mx-auto mt-12 max-w-2xl text-center text-base font-semibold leading-relaxed tracking-wide text-[#F7C94B] drop-shadow-md sm:text-lg md:mt-16`}
          >
            {dict.blogs_Recommend_26}
          </p>
        </div>
      </div>
    </>
  );
};

export default Python;
