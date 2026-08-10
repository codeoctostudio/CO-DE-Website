import front from "@/assets/playground/front.webp";
import shape from "@/assets/CourseSkills/light/shape.webp";
import color from "@/assets/CourseSkills/light/color.webp";
import head from "@/assets/CourseSkills/light/head.webp";
import bulb from "@/assets/CourseSkills/light/bulb.webp";
import temp from "@/assets/CourseSkills/light/temp.webp";
import camera from "@/assets/CourseSkills/light/camera.webp";
import Image from "next/image";
import "@/component/style.css";
const { useLanguage } = require("@/hook/useLanguage");

const Playground = () => {
  const { dict, lang } = useLanguage();
  const features = [
    {
      logo: shape,
      title: dict.playground_3,
      desc: dict.playground_4,
    },
    { logo: color, title: dict.playground_5, desc: dict.playground_6 },
    { logo: head, title: dict.playground_7, desc: dict.playground_8 },
    {
      logo: bulb,
      title: dict.playground_9,
      desc: dict.playground_10,
    },
    {
      logo: temp,
      title: dict.playground_11,
      desc: dict.playground_12,
    },
    {
      logo: camera,
      title: dict.playground_13,
      desc: dict.playground_14,
    },
  ];

  const featureRender = features.map((feature, index) => (
    <div
      key={index}
      className="flex w-[35%] flex-col items-center text-center sm:w-[30%]"
    >
      <Image
        src={feature.logo}
        className="-mb-6 md:-mb-11 lg:-mb-14 xl:-mb-20"
        loading="lazy"
        alt="Feature"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <p
        className={`mb-5 text-sm font-bold text-[#EA587F] ${
          lang === "th" ? "font-looped" : ""
        } sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
      >
        {feature.title}
      </p>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl">
        {feature.desc}
      </p>
    </div>
  ));
  return (
    <>
      <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-37.5 font-comfortaa text-white ">
        <p
          className={`w-[80%] text-center text-3xl ${lang === "th" ? "looped-text" : ""} md:text-4xl`}
        >
          {dict.playground_1}
        </p>
        <p className="my-14 w-[80%] text-center text-lg md:text-xl">
          {dict.playground_2}
        </p>
        <Image
          src={front}
          alt="Front View"
          className="w-[80%] rounded-3xl md:w-[50%]"
          loading="eager"
        />
        <div className="flex w-[80%] flex-wrap justify-around">
          {featureRender}
        </div>
      </main>
    </>
  );
};

export default Playground;
