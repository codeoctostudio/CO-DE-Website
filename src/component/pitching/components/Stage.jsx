import stage from "@/assets/stage/stage.webp";
import img1 from "@/assets/stage/img1.webp";
import img2 from "@/assets/stage/img2.webp";
import img3 from "@/assets/stage/img3.webp";
import Image from "next/image";
import {useLanguage} from "@/hook/useLanguage";
import "@/component/style.css";

const Stage = () => {
  const { dict, lang } = useLanguage();

  return (
    <>
      <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-37.5 font-comfortaa text-white ">
        <p className={`w-[80%] text-center text-3xl leading-relaxed md:text-4xl ${lang === "th" ? "looped-text" : ""}`}>
          {dict.pitchingStage_1}
        </p>
        <p className="my-14 w-[80%] text-center text-lg md:text-xl">
          {dict.pitchingStage_2}
        </p>
        <Image
          src={stage}
          alt="Star"
          className="mb-40 w-[80%] rounded-3xl md:w-[50%]"
        />
        <section className="mb-20 flex w-[90%] flex-col items-center justify-between md:flex-row">
          <Image
            src={img1}
            alt="Presentation"
            className="mb-10 w-[90%] rounded-3xl md:mb-0 md:w-[45%]"
          />
          <p className={`md:text-md w-[90%] text-center text-base text-[#FFDD4F] ${lang === "th" ? "looped-text" : ""} sm:text-lg md:w-[45%] lg:text-xl xl:text-2xl `}>
            {dict.pitchingStage_3}
          </p>
        </section>

        <section className="mb-32 flex w-[90%] flex-col items-center justify-between md:flex-row-reverse">
          <Image
            src={img2}
            alt="Presentation"
            className="mb-10 w-[90%] rounded-3xl md:mb-0 md:w-[45%]"
          />
          <p className={`md:text-md w-[90%] text-center text-base text-[#FFDD4F] ${lang === "th" ? "looped-text" : ""} sm:text-lg md:w-[45%] lg:text-xl xl:text-2xl`}>
            {dict.pitchingStage_4}
          </p>
        </section>

        <section className="mb-20 flex w-[90%] flex-col items-center justify-between">
          <Image
            src={img3}
            alt="Project Pitching"
            className="mb-10 w-[90%] md:w-[50%] rounded-3xl"
          />
          <p className=" w-[90%] text-center text-base sm:text-sm lg:text-lg xl:text-xl ">
            <span className={`text-[#B5B32C] text-xl ${lang === "th" ? "looped-text" : ""}`}>{dict.pitchingStage_5}</span>{dict.pitchingStage_6}
          </p>
        </section>
      </main>
    </>
  );
};

export default Stage;
