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

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WebCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#E9587E] pt-[80px] font-comfortaa text-white md:pt-[110px]">
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
            "From design basics to coding magic - Start creating your own
            website with Python."
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
              Skills Developed
            </p>
            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Frontend Problem-solving and Logical Thinking
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Creative Frontend Design</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Understanding Frontend Development Concepts
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Visualizing and Interacting with Web Content
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
            <p>Intermediate</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={require}
              alt="Required"
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

      <section className="flex w-full items-center justify-center bg-[#fe7398] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Learning Process
          </p>

          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Bring Web to life with Python:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Integrating Python with HTML</li>
              <li>Learn Web Routing with Python using Flask</li>
            </ul>

            <li className="font-bold">Introduction to Web Development:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Understand the basics and importance of web development.</li>
              <li>Explore website components and their functions.</li>
            </ul>

            <li className="font-bold">HTML & CSS Basics:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Master HTML for structuring web pages.</li>
              <li>Learn CSS for styling and layout design.</li>
            </ul>

            <li className="font-bold">Responsive Design:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Design websites for various devices.</li>
            </ul>

            <li className="font-bold">Advanced CSS Techniques:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Explore advanced CSS for dynamic designs.</li>
            </ul>

            <li className="font-bold">UX/UI Design:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Learn principles of user experience and interface design.</li>
              <li>Create mockups for website planning.</li>
            </ul>

            <li className="font-bold">Introduction to JavaScript:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Basics of JavaScript for interactivity.</li>
            </ul>

            <li className="font-bold">Frontend Frameworks:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Introduction to popular frontend frameworks..</li>
            </ul>

            <li className="font-bold">Feedback and Review with teacher:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Receive feedback from the instructor and peers on your projects.
              </li>
              <li>
                Reflect on your own work and identify areas for improvement
                based on feedback received.
              </li>
            </ul>

            <li className="font-bold">Challenges and Extensions:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Take on challenges and extensions to deepen your understanding
                and skills.
              </li>
              <li>
                Experiment with Web development to stretch your creativity and
                problem-solving abilities.
              </li>
            </ul>

            <li className="font-bold">Project Showcase:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Showcase your projects to the class or in a public exhibition.
              </li>
              <li>
                Present your work, explain your creative process, and share
                insights gained from the project.
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
        <div className="flex h-[500px] w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/x8Rjqw6KFPk?"
            title="CO-DE : Web Development"
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

export default WebCourse;
