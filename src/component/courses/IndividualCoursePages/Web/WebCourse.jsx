"use client";

import kid from "@/assets/CourseLogos/Web/main.webp";
import webStat from "@/assets/CourseLogos/Web/webStat.webp";
import check from "@/assets/CourseLogos/Web/check.webp";
import episodes from "@/assets/CourseLogos/Web/episodes.webp";
import web from "@/assets/CourseLogos/Web/web.webp";
import group from "@/assets/CourseIcons/group.webp";
import level2 from "@/assets/CourseIcons/level2.webp";
import laptop from "@/assets/CourseIcons/laptop.webp";
import certificate from "@/assets/CourseIcons/certificate.webp";
import textCode from "@/assets/CourseIcons/textCode.webp";
import require from "@/assets/CourseIcons/require.webp";
import img1 from "@/assets/CourseLogos/Web/images/img1.webp";
import img2 from "@/assets/CourseLogos/Web/images/img2.webp";
import img3 from "@/assets/CourseLogos/Web/images/img3.webp";
import { useLanguage } from "@/hook/useLanguage";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WebCourse = () => {
  const { dict } = useLanguage();
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#E9587E] pt-20 font-comfortaa text-white md:pt-27.5">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#E9587E]   lg:w-[70%]">
          <Image
            src={web}
            alt="Web Development"
            className=" w-full"
            loading="eager"
            decoding="async"
            //{...{ fetchPriority: "high" }}
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            {dict.course_creative_fullstack_1}
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <Image
          src={kid}
          alt="Web Development Project"
          className="w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#FF9AB5] md:flex-row">
        <Image
          src={webStat}
          alt="Web Development Course"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
          decoding="async"
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              {dict.course_creative_fullstack_2}
            </p>
            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict.course_creative_fullstack_3}
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">{dict.course_creative_fullstack_4}</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict.course_creative_fullstack_5}
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  {dict.course_creative_fullstack_6}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#E9587E] p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <Image
              src={level2}
              alt="Level"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_creative_fullstack_7}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={require}
              alt="Required"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_creative_fullstack_8}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={textCode}
              alt="Text Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_creative_fullstack_9}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_creative_fullstack_10}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={group}
              alt="Group"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_creative_fullstack_11}</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={certificate}
              alt="Certificate"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>{dict.course_creative_fullstack_12}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#fe7398] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            {dict.course_creative_fullstack_13}
          </p>

          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">{dict.course_creative_fullstack_14}</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_15}</li>
              <li>{dict.course_creative_fullstack_16}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_17}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_18}</li>
              <li>{dict.course_creative_fullstack_19}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_20}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_21}</li>
              <li>{dict.course_creative_fullstack_22}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_23}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_24}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_25}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_26}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_27}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_28}</li>
              <li>{dict.course_creative_fullstack_29}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_30}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_31}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_32}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>{dict.course_creative_fullstack_33}</li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_34}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                {dict.course_creative_fullstack_35}
              </li>
              <li>
                {dict.course_creative_fullstack_36}
              </li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_37}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                {dict.course_creative_fullstack_38}
              </li>
              <li>
                {dict.course_creative_fullstack_39}
              </li>
            </ul>

            <li className="font-bold">{dict.course_creative_fullstack_40}:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                {dict.course_creative_fullstack_41}
              </li>
              <li>
                {dict.course_creative_fullstack_42}
              </li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#FF9AB5]  p-12 ">
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
            src="https://www.youtube.com/embed/mPOJplu-6OQ"
            title="CO-DE : Web Development"
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

export default WebCourse;
