"use client";
import kid from "@/assets/CourseLogos/Python/main.webp";
import javaStat from "@/assets/CourseLogos/Java/javaStat.webp";
import check from "@/assets/CourseLogos/Java/check.webp";
import episodes from "@/assets/CourseLogos/Java/episodes.webp";
import java from "@/assets/CourseLogos/Java/java.webp";
import level2 from "@/assets/CourseIcons/level2.webp";
import textCode from "@/assets/CourseIcons/textCode.webp";
import laptop from "@/assets/CourseIcons/laptop.webp";
import group from "@/assets/CourseIcons/group.webp";
import certificate from "@/assets/CourseIcons/certificate.webp";

import img1 from "@/assets/CourseLogos/Python/images/img1.webp";
import img2 from "@/assets/CourseLogos/Python/images/img2.webp";
import img3 from "@/assets/CourseLogos/Python/images/img3.webp";


import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const JavaCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#00AEE4] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#00AEE4]   lg:w-[70%]">
          <Image
            src={java}
            alt="Java"
            className=" w-full"
            loading="eager"
            decoding="async"
            //{...{ fetchPriority: "high" }}
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "A Desired class that empowers your basic fundamental Java skills."
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <Image
          src={kid}
          alt="Java Project"
          className=" w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#71DDFF] md:flex-row">
        <Image
          src={javaStat}
          alt="Java Course"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
          decoding="async"
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              Skills Developed
            </p>
            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  A solid understanding of programming concepts
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Be able to break down problems into smaller steps and design
                  efficient algorithms to solve them.
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Strong problem-solving skills and Coding technique when
                  dealing with Programming problem
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Be able to design and implement object-oriented solutions to
                  problems
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
              alt="Level 2"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Intermediate</p>
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
            Learning Process
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Introduction to Java:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Gain an understanding of the concept of low-level language and
                high-level language in coding.
              </li>
              <li>Introduction to Java and its applications.</li>
              <li>Explanation of Java syntax and its data types.</li>
            </ul>

            <li className="font-bold">Control Flow and Functions:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Understand conditional statements.</li>
              <li>Explore the variation of loops in Java.</li>
              <li>Introduction to methods and their importance.</li>
            </ul>

            <li className="font-bold">Data Structures in Java:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Learn about organizing and storing data, along with its
                advantages and use cases.
              </li>
            </ul>

            <li className="font-bold">Error Handling:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Understand program bugs and the concept of error handling
                techniques.
              </li>
            </ul>

            <li className="font-bold">
              Introduction to Object-Oriented Programming (OOP):
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>Introduction to OOP concepts: classes and objects.</li>
              <li>Defining classes with attributes and methods.</li>
              <li>
                Exploration of encapsulation, inheritance, and polymorphism.
              </li>
            </ul>

            <li className="font-bold">Algorithm and Diagram Design:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Learn about algorithm design principles.</li>
              <li>
                Introduction to flowcharts and pseudocode for algorithm
                visualization and design.
              </li>
            </ul>

            <li className="font-bold"> Hands-on Project:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Review and reinforce concepts covered in the previous weeks.
              </li>
              <li>
                Encourage students to brainstorm ideas for their final project.
              </li>
              <li>
                Students work on their final projects under supervision,
                receiving assistance and guidance as needed.
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

export default JavaCourse;
