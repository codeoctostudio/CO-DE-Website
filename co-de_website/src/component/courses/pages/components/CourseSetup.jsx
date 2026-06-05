"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CourseSetup = (props) => {
  const courses = props.coursesData.map((course, index) => (
    <div key={index} className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6 w-[80%] text-center text-2xl text-[#FDFF86] md:text-3xl xl:text-4xl">
        {course.title}
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image
          src={course.pic}
          alt="Our Course"
          className="rounded-xl"
          loading="lazy"
        />
        <Link
          href={course.portal}
          className="absolute bottom-[3%] right-[5%] flex h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mb-28 w-[80%] rounded-2xl border-8 border-black md:w-[70%] xl:w-[60%]"
      >
        {props.slideshow.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              className="w-full h-full object-cover"
              src={item}
              alt="Our Course Slide"
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="w-[80%] text-center text-2xl text-[#FDFF86] md:text-3xl xl:text-4xl">
        {props.texts.p1}
      </p>

      <p className="mb-28 mt-8 w-[80%] text-center text-base md:text-lg lg:text-xl">
        {props.texts.p2}
      </p>

      <p className="w-[80%] text-center text-2xl text-[#FDFF86] md:text-3xl xl:text-4xl">
        {props.texts.p3}
      </p>
      <p className="mb-28 mt-8 w-[80%] text-center text-base md:text-lg lg:text-xl">
        {props.texts.p4}
      </p>

      {courses}
    </div>
  );
};

export default CourseSetup;
