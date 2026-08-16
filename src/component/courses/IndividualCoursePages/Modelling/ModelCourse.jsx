"use client";

import kid from "@/assets/CourseLogos/Modelling/main.webp";
import modelStat from "@/assets/CourseLogos/Modelling/modelStat.webp";
import modelStatTH from "@/assets/CourseLogos/Modelling/modelStatTH.webp";
import check from "@/assets/CourseLogos/Modelling/check.webp";
import episodes from "@/assets/CourseLogos/Modelling/episodes.webp";
import modelling from "@/assets/CourseLogos/Modelling/modelling.webp";
import level1 from "@/assets/CourseIcons/level1.webp";
import threedeeprint from "@/assets/CourseIcons/3dprint.webp";
import laptop from "@/assets/CourseIcons/laptop.webp";
import group from "@/assets/CourseIcons/group.webp";
import certificate from "@/assets/CourseIcons/certificate.webp";
import img1 from "@/assets/CourseLogos/Modelling/images/img1.webp";
import img2 from "@/assets/CourseLogos/Modelling/images/img2.webp";
import img3 from "@/assets/CourseLogos/Modelling/images/img3.webp";

import { useLanguage } from "@/hook/useLanguage";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ModelCourse = () => {
  const { dict, lang } = useLanguage();
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F18E43] pt-20 font-comfortaa text-white md:pt-27.5">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#F18E43]   lg:w-[70%]">
          <Image
            src={modelling}
            alt="3D Modelling"
            className=" w-full"
            loading="eager"
            decoding="async"
            //{...{ fetchPriority: "high" }}
          />

          <p
            className={`my-12 w-[90%] text-center text-xl ${lang === "th" ? "font-looped" : ""} lg:text-2xl xl:text-3xl`}
          >
            {dict.course_mechanical_3modelling_1}
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <Image
          src={kid}
          alt="3D Modelling Project"
          className=" w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#FFAE71] md:flex-row">
        <Image
          src={lang === "th" ? modelStatTH : modelStat}
          alt="3D Modelling Course"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
        <div
          className={`flex w-full ${lang === "th" ? "font-looped" : ""} flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 `}
        >
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              {dict.course_mechanical_3modelling_2}
            </p>

            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_mechanical_3modelling_3}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_mechanical_3modelling_4}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_mechanical_3modelling_5}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_mechanical_3modelling_6}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_mechanical_3modelling_7}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#F18E43]  p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <Image
              src={level1}
              alt="Level"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_mechanical_3modelling_8}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_mechanical_3modelling_9}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={group}
              alt="Group"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_mechanical_3modelling_10}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={threedeeprint}
              alt="3D Printing"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_mechanical_3modelling_11}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={certificate}
              alt="Certificate"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_mechanical_3modelling_12}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#fa9f5a] p-10 text-black">
        <div>
          <p
            className={`mb-5 text-2xl font-bold lg:text-3xl ${lang === "th" ? "font-looped" : ""}`}
          >
            {dict.course_mechanical_3modelling_13}
          </p>
          <p
            className={`mb-5 text-2xl font-bold lg:text-3xl ${lang === "th" ? "font-looped" : ""}`}
          >
            {dict.course_mechanical_3modelling_14}
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_mechanical_3modelling_15}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_16}</li>
              <li>{dict.course_mechanical_3modelling_17}</li>
              <li>{dict.course_mechanical_3modelling_18}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_mechanical_3modelling_19}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_20}</li>
              <li>{dict.course_mechanical_3modelling_21}</li>
              <li>{dict.course_mechanical_3modelling_22}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_mechanical_3modelling_23}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_24}</li>
              <li>{dict.course_mechanical_3modelling_25}</li>
              <li>{dict.course_mechanical_3modelling_26}</li>
            </ul>
          </ul>

          <p
            className={`mt-10 text-2xl font-bold ${lang === "th" ? "font-looped" : ""} lg:text-3xl`}
          >
            {dict.course_mechanical_3modelling_27}
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_28}</li>
              <li>{dict.course_mechanical_3modelling_29}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_mechanical_3modelling_30}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_31}</li>
              <li>{dict.course_mechanical_3modelling_32}</li>
              <li>{dict.course_mechanical_3modelling_33}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_mechanical_3modelling_34}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_35}</li>
              <li>{dict.course_mechanical_3modelling_36}</li>
              <li>{dict.course_mechanical_3modelling_37}</li>
            </ul>
          </ul>

          <p
            className={`mt-10 text-2xl font-bold lg:text-3xl ${lang === "th" ? "font-looped" : ""}`}
          >
            {dict.course_mechanical_3modelling_38}
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_39}</li>
              <li>{dict.course_mechanical_3modelling_40}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_mechanical_3modelling_41}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_mechanical_3modelling_42}</li>
              <li>{dict.course_mechanical_3modelling_43}</li>
            </ul>
          </ul>

          <p className="my-10 text-base md:text-lg lg:text-xl">
            {dict.course_mechanical_3modelling_44}
          </p>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#FFAE71]  p-12 ">
        <Image
          src={episodes}
          alt="episodes"
          className=" md:w-[80%] lg:w-[70%]"
          loading="lazy"
        />
        <div className="absolute right-0 top-0 bg-[#F4CC42] px-5 py-2">
          <p className="text-center">Our Course Path</p>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white text-black lg:flex-row">
        <div className="flex h-125 w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gndmW3hftlY"
            title="CO-DE : Block-based code with Scratch"
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

export default ModelCourse;
