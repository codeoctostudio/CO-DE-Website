"use client";
import kid from "@/assets/CourseLogos/Octo/main.webp";
import octoStat from "@/assets/CourseLogos/Octo/octoStat.webp";
import check from "@/assets/CourseLogos/Octo/check.webp";
import episodes from "@/assets/CourseLogos/Octo/episodes.webp";
import dinocode from "@/assets/CourseLogos/Octo/dinocode.webp";
import group from "@/assets/CourseIcons/group.webp";
import level1 from "@/assets/CourseIcons/level1.webp";
import laptop from "@/assets/CourseIcons/laptop.webp";
import certificate from "@/assets/CourseIcons/certificate.webp";
import blockCode from "@/assets/CourseIcons/blockCode.webp";
import img1 from "@/assets/CourseLogos/Octo/images/img1.webp";
import img2 from "@/assets/CourseLogos/Octo/images/img2.webp";
import img3 from "@/assets/CourseLogos/Octo/images/img3.webp";
import img4 from "@/assets/CourseLogos/Octo/images/img4.webp";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "@/hook/useLanguage";

const OctoCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const { dict, lang } = useLanguage();
  const slideShowData = [img1, img2, img3, img4];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#6FBC87] pt-20 font-comfortaa text-white md:pt-27.5">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#6FBC87]   lg:w-[70%]">
          <Image
            src={dinocode}
            alt="Dino Code"
            className=" w-full"
            loading="eager"
            decoding="async"
          />

          <p
            className={`my-12 w-[90%] text-center text-xl lg:text-2xl xl:text-3xl ${
              lang === "th" ? "font-looped" : ""
            }`}
          >
            {dict.course_blockcode_dino_1}
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <Image
          src={kid}
          alt="Dino Code Project"
          className="w-full object-cover   drop-shadow-2xl  lg:w-[40%] "
          loading="eager"
          decoding="async"
        />
      </section>

      <section className="flex w-full flex-col bg-[#ACEDBF] md:flex-row">
        <Image
          src={octoStat}
          alt="Dino Code Course"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
          decoding="async"
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p
              className={`mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl ${
                lang === "th" ? "font-looped" : ""
              }`}
            >
              {dict.course_blockcode_dino_2}
            </p>

            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_blockcode_dino_3}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_blockcode_dino_4}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_blockcode_dino_5}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_blockcode_dino_6}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_blockcode_dino_7}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#6CBA84] p-10">
        <div
          className={`flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ${
            lang === "th" ? "font-looped" : ""
          }`}
        >
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <Image
              src={level1}
              alt="Level"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_blockcode_dino_7}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={blockCode}
              alt="Block-Based Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_blockcode_dino_8}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_blockcode_dino_9}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={group}
              alt="Group"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_blockcode_dino_11}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={certificate}
              alt="Certificate"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_blockcode_dino_12}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#b7f5ca] p-10 text-black">
        <div>
          <p
            className={`mb-5 text-2xl font-bold lg:text-3xl ${
              lang === "th" ? "font-looped" : ""
            }`}
          >
            {dict.course_blockcode_dino_12}
          </p>
          <p
            className={`mb-5 text-2xl font-bold lg:text-3xl ${
              lang === "th" ? "font-looped" : ""
            }`}
          >
            {dict.course_blockcode_dino_13}
          </p>
          <p className="mb-5 text-xl  lg:text-2xl">
            {dict.course_blockcode_dino_14}
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_blockcode_dino_15}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_blockcode_dino_16}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_blockcode_dino_17}{" "}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_blockcode_dino_18}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_blockcode_dino_19}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_blockcode_dino_20}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_blockcode_dino_21}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_blockcode_dino_22}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_blockcode_dino_23}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_blockcode_dino_24}</li>
            </ul>

            <li className={`font-bold ${lang === "th" ? "font-looped" : ""}`}>
              {dict.course_blockcode_dino_25}
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_blockcode_dino_26}</li>
            </ul>
          </ul>
          <p className="mb-5 text-base md:text-lg lg:text-xl">
            Enroll your child in the Dino Code class today and watch as they
            embark on a journey of discovery, creativity, and endless
            possibilities! Give them the gift of coding and set them on the path
            to a bright and promising future.
          </p>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#ACEDBF] p-12 ">
        <Image
          src={episodes}
          alt="episodes"
          className=" md:w-[80%] lg:w-[70%]"
          loading="lazy"
        />
        <div className="absolute right-0 top-0 bg-[#4CBD80] px-5 py-2">
          <p className="text-center">Our Course Path</p>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white text-black lg:flex-row">
        <div className="flex h-125 w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Q-LC9OPEvhk"
            title="Dino Code with CO-DE"
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

export default OctoCourse;
