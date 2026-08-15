"use client";
import kid from "@/assets/CourseLogos/Design/main.webp";
import designStat from "@/assets/CourseLogos/Design/designStat.webp";
import designStatth from "@/assets/CourseLogos/Design/designStatth.webp";
import check from "@/assets/CourseLogos/Design/check.webp";
import episodes from "@/assets/CourseLogos/Design/episodes.webp";
import designThinking from "@/assets/CourseLogos/Design/designThinking.webp";
import level1 from "@/assets/CourseIcons/level1.webp";
import blockCode from "@/assets/CourseIcons/blockCode.webp";
import laptop from "@/assets/CourseIcons/laptop.webp";
import group from "@/assets/CourseIcons/group.webp";
import learnPlay from "@/assets/CourseIcons/learnPlay.webp";
import img1 from "@/assets/CourseLogos/Design/images/img1.webp";
import img2 from "@/assets/CourseLogos/Design/images/img2.webp";
import img3 from "@/assets/CourseLogos/Design/images/img3.webp";
import img4 from "@/assets/CourseLogos/Design/images/img4.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "@/hook/useLanguage";

const DesignCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const { dict, lang } = useLanguage();

  const slideShowData = [img1, img2, img3, img4];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F9E5AC] pt-20 font-comfortaa text-white md:pt-27.5">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#F6C94B]   lg:w-[70%]">
          <Image
            src={designThinking}
            alt="Design Thinking"
            className=" w-full"
            decoding="async"
            loading="eager"
          />

          <p
            className={`my-12 w-[90%] text-center text-xl lg:text-2xl xl:text-3xl ${
              lang === "th" ? "looped-text" : ""
            }`}
          >
            {dict?.course_nonecode_designthinking_10}
          </p>

          {/* Scratch + Kid Pic*/}
        </div>

        <Image
          src={kid}
          alt="Design Thinking"
          className=" w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          decoding="async"
          loading="eager"
        />
      </section>

      <section className="flex w-full flex-col bg-[#FEE397] md:flex-row">
        <Image
          src={lang === "th" ? designStatth : designStat}
          alt="Design Thinking Stat"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
        />

        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p
              className={`}mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl ${
                lang === "th" ? "looped-text" : ""
              }`}
            >
              {dict?.course_nonecode_designthinking_11}
            </p>

            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict?.course_nonecode_designthinking_12}
                </p>
              </li>

              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict?.course_nonecode_designthinking_13}
                </p>
              </li>

              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict?.course_nonecode_designthinking_14}
                </p>
              </li>

              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict?.course_nonecode_designthinking_15}
                </p>
              </li>

              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict?.course_nonecode_designthinking_16}
                </p>
              </li>

              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict?.course_nonecode_designthinking_17}
                </p>
              </li>

              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict?.course_nonecode_designthinking_18}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#F3C74A] p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <Image
              src={level1}
              alt="Level"
              className="mr-3 w-[15%]"
              loading="lazy"
            />

            <p>{dict?.course_nonecode_designthinking_19}</p>
          </div>

          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={blockCode}
              alt="Block Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />

            <p>{dict?.course_nonecode_designthinking_20}</p>
          </div>

          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />

            <p>{dict?.course_nonecode_designthinking_21}</p>
          </div>

          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={group}
              alt="Group"
              className="mr-3 w-[15%]"
              loading="lazy"
            />

            <p>{dict?.course_nonecode_designthinking_22}</p>
          </div>

          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={learnPlay}
              alt="Learn Play"
              className="mr-3 w-[15%]"
              loading="lazy"
            />

            <p>{dict?.course_nonecode_designthinking_23}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#fddb7e] p-10 text-black">
        <div>
          <p
            className={`mb-5 text-2xl font-bold lg:text-3xl ${
              lang === "th" ? "looped-text" : ""
            }`}
          >
            {dict?.course_nonecode_designthinking_1}
          </p>

          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className={`font-bold ${lang === "th" ? "looped-text" : ""}`}>
              {dict?.course_nonecode_designthinking_11}{" "}
            </li>

            <ul className="mb-5 ml-7 list-square">
              <li>{dict?.course_nonecode_designthinking_3}</li>

              <li>{dict?.course_nonecode_designthinking_3_1}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "looped-text" : ""}`}>
              {dict?.course_nonecode_designthinking_4}
            </li>

            <ul className="mb-5 ml-7 list-square">
              <li>{dict?.course_nonecode_designthinking_5}</li>

              <li>{dict?.course_nonecode_designthinking_5_1}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "looped-text" : ""}`}>
              {dict?.course_nonecode_designthinking_6}
            </li>

            <ul className="mb-5 ml-7 list-square">
              <li>{dict?.course_nonecode_designthinking_7}</li>

              <li>{dict?.course_nonecode_designthinking_7_1}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "looped-text" : ""}`}>
              {dict?.course_nonecode_designthinking_8}
            </li>

            <ul className="mb-5 ml-7 list-square">
              <li>{dict?.course_nonecode_designthinking_9}</li>

              <li>
                <p>{dict?.course_nonecode_designthinking_9_1}</p>
              </li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#FEE397]  p-12 ">
        <Image
          src={episodes}
          alt="episodes"
          className=" md:w-[80%] lg:w-[70%]"
          loading="lazy"
        />

        <div className="absolute right-0 top-0 bg-[#F7A2A0] px-5 py-2">
          <p className="text-center">Our Adventure</p>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white text-black lg:flex-row">
        <div className="flex h-125 w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ou7Hk1aGJWQ"
            title="Design Thinking"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex h-125 w-full items-center justify-center border-2 border-black bg-[#6FBC87] lg:w-[50%]">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            style={{
              "--swiper-navigation-color": "#FDFF86",
              "--swiper-pagination-color": "#FDFF86",
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
            }}
            className="w-full h-full"
          >
            {slideShowData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full flex items-center justify-center overflow-hidden"
              >
                <Image
                  className="w-full h-full object-cover"
                  src={item}
                  alt="Design Thinking Course"
                  loading="eager"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default DesignCourse;
