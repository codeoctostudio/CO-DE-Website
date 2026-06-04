/* eslint-disable react/no-unescaped-entities */
import kid from "../../../../assets/CourseLogos/Microbit/main.webp";
import microStat from "../../../../assets/CourseLogos/Microbit/microStat.webp";
import check from "../../../../assets/CourseLogos/Microbit/check.webp";
import episodes from "../../../../assets/CourseLogos/Microbit/episodes.webp";
import microbit from "../../../../assets/CourseLogos/Microbit/microbit.webp";
import level1 from "../../../../assets/CourseIcons/level1.webp";
import textCode from "../../../../assets/CourseIcons/blockCode.webp";
import laptop from "../../../../assets/CourseIcons/laptop.webp";
import group from "../../../../assets/CourseIcons/group.webp";
import certificate from "../../../../assets/CourseIcons/certificate.webp";

import img1 from "../../../../assets/CourseLogos/Microbit/images/img1.webp";
import img2 from "../../../../assets/CourseLogos/Microbit/images/img2.webp";
import img3 from "../../../../assets/CourseLogos/Microbit/images/img3.webp";

import { Carousel } from "@material-tailwind/react";
const MicroCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F18E43] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#F18E43]   lg:w-[70%]">
          <img
            src={microbit}
            alt="Microbit"
            className=" w-full"
            loading="eager"
            decoding="async"
            //{...{ fetchPriority: "high" }}
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "A fun start in the world of microcontrollers along with the basics
            of block-based coding."
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt="Microbit Project"
          className="  w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          loading="eager"
          decoding="async"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#FFAE71] md:flex-row">
        <img
          src={microStat}
          alt="Microbit Course"
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
                <p className="ml-2">Computation Skills & Logical Thinking</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Introduction to programming concepts and logic
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Creativity and imagination through project-based learning
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Basic understanding of algorithms and sequencing with
                  microcontrollers
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Tangible coding with embedded system concepts
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#F18E43]  p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <img
              src={level1}
              alt="Level"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Beginner</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img
              src={textCode}
              alt="Text Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Block-Based Code</p>
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
            Learning Process
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Introduction to Micro:bit:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Start by understanding the basics of the Microcontroller ,
                including its interface and components.
              </li>
              <li>
                Familiarize yourself with the microcontroller, understanding the
                concept of embedded systems.
              </li>
            </ul>

            <li className="font-bold">Basic Concepts:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Learn fundamental programming concepts such as sequencing,
                loops, conditionals, and variables.
              </li>
              <li>
                Understand how these concepts are applied in the Microcontroller
                through hands-on activities and examples.
              </li>
              <li className="font-bold">Simple Projects:</li>
              <ul className="mb-5 ml-10 list-square">
                <li>
                  Create simple programs like displaying text on the LED matrix,
                  using buttons to control actions, and playing basic sounds.
                </li>
              </ul>
            </ul>

            <li className="font-bold">Advanced Concepts:</li>
            <ul className="mb-5 ml-7 list-square">
              <li className="font-bold">Integration with Other Hardware:</li>
              <ul className="mb-5 ml-10 list-square">
                <li>
                  Learn to use the Microcontroller with other hardware
                  components, such as sensors, motors, LEDs, buzzers, servos, or
                  displays.
                </li>
              </ul>
              <li className="font-bold">Complex Projects:</li>
              <ul className="mb-5 ml-10 list-square">
                <li>
                  Develop more complex projects that integrate multiple
                  components and advanced programming concepts.
                </li>
              </ul>
            </ul>

            <li className="font-bold">Problem-Solving and Debugging:</li>
            <ul className="mb-5 ml-7 list-square">
              <li className="font-bold">Troubleshooting:</li>
              <ul className="mb-5 ml-10 list-square">
                <li>
                  Learn common troubleshooting techniques for both hardware and
                  software issues.
                </li>
              </ul>
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
                alt="Microbit Course"
                loading="lazy"
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default MicroCourse;
