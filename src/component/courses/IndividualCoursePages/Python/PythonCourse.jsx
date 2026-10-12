"use client";
import kid from "@/assets/CourseLogos/Python/main.webp";
import pythonStat from "@/assets/CourseLogos/Python/pythonStat.webp";
import check from "@/assets/CourseLogos/Python/check.webp";
import episodes from "@/assets/CourseLogos/Python/episodes.webp";
import python from "@/assets/CourseLogos/Python/python.webp";
import group from "@/assets/CourseIcons/group.webp";
import level2 from "@/assets/CourseIcons/level2.webp";
import laptop from "@/assets/CourseIcons/laptop.webp";
import certificate from "@/assets/CourseIcons/certificate.webp";
import textCode from "@/assets/CourseIcons/textCode.webp";
import img1 from "@/assets/CourseLogos/Python/images/img1_new09102026.webp";
import img2 from "@/assets/CourseLogos/Python/images/img2.webp";
import img3 from "@/assets/CourseLogos/Python/images/img3.webp";
import { useLanguage } from "@/hook/useLanguage";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PythonCourse = () => {
  const { dict } = useLanguage();
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#00AEE4] pt-20 font-comfortaa text-white md:pt-27.5">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#00AEE4]   lg:w-[70%]">
          <Image
            src={python}
            alt="Python"
            className=" w-full"
            loading="eager"
            decoding="async"
            //{...{ fetchPriority: "high" }}
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            {dict.course_fundamental_python_1}
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <Image
          src={kid}
          alt="Python Project"
          className=" w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#71DDFF] md:flex-row">
        <Image
          src={pythonStat}
          alt="Python Course"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
          decoding="async"
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              {dict.course_fundamental_python_2}
            </p>
            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict.course_fundamental_python_3}
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict.course_fundamental_python_4}
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict.course_fundamental_python_5}
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict.course_fundamental_python_6}
                </p>
              </li>
            </ul>
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
            <p>{dict.course_fundamental_python_31}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={textCode}
              alt="Text Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_fundamental_python_33}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_fundamental_python_34}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={group}
              alt="Group"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_fundamental_python_35}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={certificate}
              alt="Certificate"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_fundamental_python_36}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#5dcff5] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            {dict.course_fundamental_python_7}
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Introduction to Python:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                {dict.course_fundamental_python_8}
              </li>
              <li>{dict.course_fundamental_python_9}</li>
              <li>{dict.course_fundamental_python_10}</li>
            </ul>

            <li className="font-bold">Control Flow and Functions:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_fundamental_python_13}</li>
              <li>{dict.course_fundamental_python_14}</li>
              <li>{dict.course_fundamental_python_15}</li>
            </ul>

            <li className="font-bold">{dict.course_fundamental_python_16}</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                {dict.course_fundamental_python_17}
              </li>
            </ul>

            <li className="font-bold">{dict.course_fundamental_python_18}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                {dict.course_fundamental_python_19}
              </li>
            </ul>

            <li className="font-bold">
              {dict.course_fundamental_python_20}:
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_fundamental_python_21}</li>
              <li>{dict.course_fundamental_python_22}</li>
              <li>
                {dict.course_fundamental_python_23}
              </li>
            </ul>

            <li className="font-bold">{dict.course_fundamental_python_24}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_fundamental_python_25}</li>
              <li>
                {dict.course_fundamental_python_26}
              </li>
            </ul>

            <li className="font-bold">{dict.course_fundamental_python_27}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                {dict.course_fundamental_python_28}
              </li>
              <li>
                {dict.course_fundamental_python_29}
              </li>
              <li>
                {dict.course_fundamental_python_30}
              </li>
            </ul>
          </ul>
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
        <div className="flex h-125 w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/8tFqcF66R7c"
            title="Python Programming"
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

export default PythonCourse;
