/* eslint-disable react/no-unescaped-entities */
import kid from "../../../../assets/CourseLogos/Microbit/main.webp";
import arduinoStat from "../../../../assets/CourseLogos/Arduino/arduinoStat.webp";
import check from "../../../../assets/CourseLogos/Arduino/check.webp";
import episodes from "../../../../assets/CourseLogos/Arduino/episodes.webp";
import arduino from "../../../../assets/CourseLogos/Arduino/arduino.webp";
import level2 from "../../../../assets/CourseIcons/level2.webp";
import textCode from "../../../../assets/CourseIcons/textCode.webp";
import laptop from "../../../../assets/CourseIcons/laptop.webp";
import group from "../../../../assets/CourseIcons/group.webp";
import certificate from "../../../../assets/CourseIcons/certificate.webp";

import img1 from "../../../../assets/CourseLogos/Microbit/images/img1.webp";
import img2 from "../../../../assets/CourseLogos/Microbit/images/img2.webp";
import img3 from "../../../../assets/CourseLogos/Microbit/images/img3.webp";

import { Carousel } from "@material-tailwind/react";
const ArduinoCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F18E43] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#F18E43]   lg:w-[70%]">
          <img
            src={arduino}
            alt="Arduino"
            className=" w-full"
            loading="eager"
            decoding="async"
            //{...{ fetchPriority: "high" }}
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "Uncover the fundamentals of electronics and embedded coding, and
            start building your own projects."
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt="Micrinbit"
          className="w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#FFAE71] md:flex-row">
        <img
          src={arduinoStat}
          alt="Arduino Course"
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

      <section className="flex items-center justify-center bg-[#F18E43]  p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <img
              src={level2}
              alt="Level"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Intermediate</p>
          </div>

          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img
              src={textCode}
              alt="Text Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Text-Based Code</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>On-site</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img
              src={group}
              alt="Group"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Private / Group Class</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img
              src={certificate}
              alt="Certificate"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Certificate Included</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#fa9f5a] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Information Coming Soon
          </p>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#FFAE71]  p-12 ">
        <img
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
        <div className=" flex h-[500px] w-full items-center justify-center border-2 border-black bg-[#6FBC87] text-[10vw] lg:w-[50%]">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
            className="drop-shadow-2xl"
          >
            {slideShowData.map((item, index) => (
              <img
                className="h-full w-full object-cover"
                key={index}
                src={item}
                alt="Arduino"
                loading="lazy"
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default ArduinoCourse;
