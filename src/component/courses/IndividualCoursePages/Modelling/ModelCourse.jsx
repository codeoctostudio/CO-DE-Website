"use client";

import kid from "@/assets/CourseLogos/Modelling/main.webp";
import modelStat from "@/assets/CourseLogos/Modelling/modelStat.webp";
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

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ModelCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F18E43] pt-[80px] font-comfortaa text-white md:pt-[110px]">
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

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "Unleash your creativity, learn the art of digital sculpting, and
            bring your ideas to life"
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
          src={modelStat}
          alt="3D Modelling Course"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              Skills Developed
            </p>

            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Proficiency in geometry and spatial reasoning
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Advanced 3D modeling skills</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Skills in character and asset creation for games
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Problem-solving abilities honed through real-world challenges
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Cultivation of design and creativity</p>
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
            <p>Beginner</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <Image
              src={laptop}
              alt="Laptop"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>On-site / Online </p>
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
              src={threedeeprint}
              alt="3D Printing"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>3D Printing Included</p>
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

      <section className="flex w-full items-center justify-center bg-[#fa9f5a] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Learning Process
          </p>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Theory and Conceptual Understanding
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">
              Introduction to Geometry and Basic Shapes:
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Understanding the fundamentals of geometry and basic shapes.
              </li>
              <li>Delving into the intricacies of three-dimensional shapes.</li>
              <li>
                Exploring concepts such as vertices, edges, and faces in 3D
                space.
              </li>
            </ul>

            <li className="font-bold">Advanced Modeling Techniques:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Transitioning from basic shapes to advanced modeling.</li>
              <li>
                Learning techniques to create complex models from simple
                primitives.
              </li>
              <li>Exploring sculpting tools and modifiers to refine models.</li>
            </ul>

            <li className="font-bold">Basic Animation Creation:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Introduction to animation principles and keyframes.</li>
              <li>
                Learning to animate objects and characters within a 3D
                environment.
              </li>
              <li>
                Understanding animation curves and timing for fluid motion.
              </li>
            </ul>
          </ul>

          <p className="mt-10 text-2xl font-bold lg:text-3xl">
            Hands-on Practice
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <ul className="mb-5 ml-7 list-square">
              <li>
                Guided exercises to apply theoretical knowledge into practical
                modeling tasks.
              </li>
              <li>
                Step-by-step tutorials to create models from basic to advanced
                complexity.
              </li>
            </ul>

            <li className="font-bold">3D Printing and Tangible Design:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Exploring the process of preparing models for 3D printing.
              </li>
              <li>
                Understanding file formats and considerations for successful
                printing.
              </li>
              <li>
                Designing custom objects and prototypes for tangible
                realization.
              </li>
            </ul>

            <li className="font-bold">
              Character and Asset Creation for Games:
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Learning character modeling techniques for game development.
              </li>
              <li>
                Designing custom tools and assets for use in game environments.
              </li>
              <li>
                Exporting models to game engines like Unity or platforms like
                Roblox.
              </li>
            </ul>
          </ul>

          <p className="mt-10 text-2xl font-bold lg:text-3xl">
            Project-Based Learning
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <ul className="mb-5 ml-7 list-square">
              <li>
                Assignments and projects to reinforce learning objectives.
              </li>
              <li>
                Real-world scenarios and challenges to encourage problem-solving
                skills.
              </li>
            </ul>

            <li className="font-bold">Application and Integration:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Integrating learned skills into real-world applications such as
                game development and 3D printing.
              </li>
              <li>
                Opportunities for creativity and personalization in projects.
              </li>
            </ul>
          </ul>

          <p className="my-10 text-base md:text-lg lg:text-xl">
            Throughout the course, emphasis will be placed on fostering
            creativity, critical thinking, and technical proficiency in 3D
            modeling.
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
        <div className="flex h-[500px] w-full  lg:w-[50%]">
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

export default ModelCourse;
