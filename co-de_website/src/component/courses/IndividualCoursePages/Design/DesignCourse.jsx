/* eslint-disable react/no-unescaped-entities */
import kid from "../../../../assets/CourseLogos/Design/main.webp";
import designStat from "../../../../assets/CourseLogos/Design/designStat.webp";
import check from "../../../../assets/CourseLogos/Design/check.webp";
import episodes from "../../../../assets/CourseLogos/Design/episodes.webp";
import designThinking from "../../../../assets/CourseLogos/Design/designThinking.webp";
import level1 from "../../../../assets/CourseIcons/level1.webp";
import blockCode from "../../../../assets/CourseIcons/blockCode.webp";
import laptop from "../../../../assets/CourseIcons/laptop.webp";
import group from "../../../../assets/CourseIcons/group.webp";
import learnPlay from "../../../../assets/CourseIcons/learnPlay.webp";

import img1 from "../../../../assets/CourseLogos/Design/images/img1.webp";
import img2 from "../../../../assets/CourseLogos/Design/images/img2.webp";
import img3 from "../../../../assets/CourseLogos/Design/images/img3.webp";
import img4 from "../../../../assets/CourseLogos/Design/images/img4.webp";

import { Carousel } from "@material-tailwind/react";
const DesignCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3, img4];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F9E5AC] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#F6C94B]   lg:w-[70%]">
          <img
            src={designThinking}
            alt="Design Thinking"
            className=" w-full"
            decoding="async"
            loading="eager"
            //{...{ fetchPriority: "high" }}
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "Spark creativity and logical thinking in your little ones, aligning
            with their developmental milestones"
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt="Design Thinking"
          className=" w-full   object-cover drop-shadow-2xl lg:w-[40%] "
          decoding="async"
          loading="eager"
          //{...{ fetchPriority: "high" }}
        />
      </section>

      <section className="flex w-full flex-col bg-[#FEE397] md:flex-row">
        <img
          src={designStat}
          alt="Course"
          className="w-full object-contain md:w-[55%]"
          loading="eager"
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              Skills Developed
            </p>
            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Gross motor skills</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Fine motor skills</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Language development</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Cognitive abilities</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Social-emotional and behavioral well-being
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Logical thinking and Sequencing</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Basic introduction to Coding experience</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#F3C74A] p-10">
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
              src={blockCode}
              alt="Block Code"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Screen Free Coding</p>
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
              src={learnPlay}
              alt="Learn Play"
              className="mr-3 w-[15%]"
              loading="lazy"
            />
            <p>Learning Through Play</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#fddb7e] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Learning Process
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Nurturing Growth in Crucial Areas: </li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                The course aims to foster growth in five crucial areas: gross
                motor skills, fine motor skills, language development, cognitive
                abilities, and social-emotional and behavioral well-being.
              </li>
              <li>
                Each aspect is likely addressed through a combination of
                activities, exercises, and projects tailored to the age and
                developmental stage of the children involved.
              </li>
            </ul>

            <li className="font-bold">Integration of 21st-century Skills:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                The curriculum places a strong emphasis on 21st-century skills
                such as coding and imagination. This likely involves hands-on
                activities where children engage in coding exercises, explore
                creative projects, and participate in imaginative play.
              </li>
              <li>
                The goal is to equip them with skills that are highly relevant
                in today's digital age.
              </li>
            </ul>

            <li className="font-bold">Storytelling and Coding Integration: </li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                One distinctive feature of the course is the integration of
                storytelling and coding. This combination serves multiple
                purposes, including enhancing creativity, logical thinking,
                language skills, and problem-solving abilities.
              </li>
              <li>
                Children may engage in storytelling activities where they create
                narratives and then use coding tools or platforms to bring their
                stories to life in a digital format.
              </li>
            </ul>

            <li className="font-bold">Engagement and Enjoyment: </li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                The course is designed to be enjoyable for children, ensuring
                that they remain engaged and motivated throughout the learning
                process.
              </li>
              <li>
                <p>
                  This likely involves interactive activities, group projects,
                  and opportunities for exploration and discovery.
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#FEE397]  p-12 ">
        <img
          src={episodes}
          alt="episodes"
          className=" md:w-[80%] lg:w-[70%]"
          loading="lazy"
        />
        <div className="absolute right-0 top-0 bg-[#F7A2A0] px-5 py-2">
          <p className="text-center">Our Adventure</p>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white text-black lg:flex-row">
        <div className="flex h-[500px] w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ou7Hk1aGJWQ"
            title="Design Thinking"
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
                alt="Design Thinking Course"
                loading="lazy"
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default DesignCourse;
