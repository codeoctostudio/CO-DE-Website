"use client";

import kid from "@/assets/CourseLogos/Python/main.webp";
import advPythonStat from "@/assets/CourseLogos/AdvPython/advPythonStat.webp";
import check from "@/assets/CourseLogos/AdvPython/check.webp";
import episodes from "@/assets/CourseLogos/AdvPython/episodes.webp";
import advPython from "@/assets/CourseLogos/AdvPython/advPython.webp";
import group from "@/assets/CourseIcons/group.webp";
import level2 from "@/assets/CourseIcons/level2.webp";
import laptop from "@/assets/CourseIcons/laptop.webp";
import certificate from "@/assets/CourseIcons/certificate.webp";
import textCode from "@/assets/CourseIcons/textCode.webp";
import require from "@/assets/CourseIcons/require.webp";
import img1 from "@/assets/CourseLogos/Python/images/img1.webp";
import img2 from "@/assets/CourseLogos/Python/images/img2.webp";
import img3 from "@/assets/CourseLogos/Python/images/img3.webp";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AdvPythonCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#00AEE4] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#00AEE4]   lg:w-[70%]">
          <Image
            src={advPython}
            alt="Python"
            className=" w-full"
            loading="eager"
            decoding="async"
            //{...{ fetchPriority: "high" }}
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "Elevate your Python proficiency with advanced Python techniques."
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <Image
          src={kid}
          alt="Scartch"
          className="  w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#71DDFF] md:flex-row">
        <Image
          src={advPythonStat}
          alt="Advanced Python"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
          decoding="async"
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              Information Coming Soon
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#00AEE4] p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <Image
              src={level2}
              alt="Level"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Intermediate</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={require}
              alt="HTML Book Tag"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Required Basic Course</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={textCode}
              alt="Text Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Text-Based Code</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>On-site / Online</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={group}
              alt="Group"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Private / Group Class</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={certificate}
              alt="Certificate"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Certificate Included</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#5dcff5] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Information Coming Soon
          </p>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#71DDFF]  p-12 ">
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
        <div className="flex h-[500px] w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/x8Rjqw6KFPk?"
            title="CO-DE : Block-based code with Scratch"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex h-[500px] w-full items-center justify-center border-2 border-black bg-[#6FBC87] lg:w-[50%]">
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

export default AdvPythonCourse;
