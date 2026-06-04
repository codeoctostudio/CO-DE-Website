/* eslint-disable react/no-unescaped-entities */
import kid from "../../../../assets/CourseLogos/Octo/main.webp";
import octoStat from "../../../../assets/CourseLogos/Octo/octoStat.webp";
import check from "../../../../assets/CourseLogos/Octo/check.webp";
import episodes from "../../../../assets/CourseLogos/Octo/episodes.webp";
import dinocode from "../../../../assets/CourseLogos/Octo/dinocode.webp";
import group from "../../../../assets/CourseIcons/group.webp";
import level1 from "../../../../assets/CourseIcons/level1.webp";
import laptop from "../../../../assets/CourseIcons/laptop.webp";
import certificate from "../../../../assets/CourseIcons/certificate.webp";
import blockCode from "../../../../assets/CourseIcons/blockCode.webp";
import img1 from "../../../../assets/CourseLogos/Octo/images/img1.webp";
import img2 from "../../../../assets/CourseLogos/Octo/images/img2.webp";
import img3 from "../../../../assets/CourseLogos/Octo/images/img3.webp";
import img4 from "../../../../assets/CourseLogos/Octo/images/img4.webp";
import { Carousel } from "@material-tailwind/react";
const OctoCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3, img4];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#6FBC87] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#6FBC87]   lg:w-[70%]">
          <img
            src={dinocode}
            alt="Dino Code"
            className=" w-full"
            loading="eager"
            decoding="async"
          />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "Ignite your passion for coding in a fun and interactive way."
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt="Dino Code Project"
          className="w-full object-cover   drop-shadow-2xl  lg:w-[40%] "
          loading="eager"
          decoding="async"
        />
      </section>

      <section className="flex w-full flex-col bg-[#ACEDBF] md:flex-row">
        <img
          src={octoStat}
          alt="Dino Code Course"
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
                  A Strong Imaginative Mind Through the Process of Storytelling
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Programming Concepts with Block-Based Coding
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Development of Sequencing and Logical Thinking Skills
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Creativity and imagination through project-based learning
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Gaining Familiarity with Technology</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#6CBA84] p-10">
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
              alt="Block-Based Code"
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

      <section className="flex w-full items-center justify-center bg-[#b7f5ca] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Learning Process
          </p>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Introducing the World of Imagination Brought to Life by Code
          </p>
          <p className="mb-5 text-xl  lg:text-2xl">
            The Dino Code class is an adventure story of a young dinosaur that
            introduces your child to the exciting world of coding in a fun and
            imaginative way!
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Imaginative Learning Goals:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                In this course, your child will embark on thrilling coding
                adventures, where they'll learn to create animations, solve
                puzzles, and bring their favorite stories to life through simple
                coding concepts.
              </li>
            </ul>

            <li className="font-bold">Creative Learning Resources: </li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Our curriculum is filled with captivating storytelling and
                hands-on activities, making learning both enjoyable and
                educational. Each lesson is carefully crafted to spark your
                child's imagination and curiosity.
              </li>
            </ul>

            <li className="font-bold">Playful Practice:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Through guided activities and games, your child will develop
                essential coding skills while having a blast! They'll use
                colorful blocks and friendly characters to code their own
                creations, fostering a love for problem-solving and critical
                thinking.
              </li>
            </ul>

            <li className="font-bold">Reflective Feedback:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Regular feedback sessions provide valuable insights into your
                child's progress and achievements. We believe in recognizing
                every milestone, no matter how small, to inspire confidence and
                a sense of accomplishment.
              </li>
            </ul>

            <li className="font-bold">Engaging Challenges:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Our course is filled with exciting challenges and puzzles that
                will keep your child engaged and motivated. They'll learn to
                overcome obstacles, think creatively, and persevere through
                trial and error.
              </li>
            </ul>

            <li className="font-bold">Project Presentations:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                At the end of the course, your child will have the opportunity
                to showcase their coding projects in a special presentation.
                They'll share their creations with family and friends, building
                confidence and communication skills in the process.
              </li>
            </ul>
          </ul>
          <p className="mb-5 text-base md:text-lg lg:text-xl">
            Enroll your child in the Dino Code class today and watch as they
            embark on a journey of discovery, creativity, and endless
            possibilities! Give them the gift of coding and set them on the path
            to a bright and promising future.
          </p>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#ACEDBF] p-12 ">
        <img
          src={episodes}
          alt="episodes"
          className=" md:w-[80%] lg:w-[70%]"
          loading="lazy"
        />
        <div className="absolute right-0 top-0 bg-[#4CBD80] px-5 py-2">
          <p className="text-center">Our Course Path</p>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white text-black lg:flex-row">
        <div className="flex h-[500px] w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Q-LC9OPEvhk"
            title="Dino Code with CO-DE"
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
                alt="Dino Code"
                loading="lazy"
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default OctoCourse;
