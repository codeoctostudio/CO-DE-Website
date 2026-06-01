import octoStudio from "../../../../../assets/courseDetails/octo.webp";
import scratch from "../../../../../assets/courseDetails/scratch.webp";

import threeDeeModel from "../../../../../assets/courseDetails/3DModel.webp";
import arduino from "../../../../../assets/courseDetails/arduino.webp";

import designThinking from "../../../../../assets/courseDetails/designThinking.webp";
import fullstack from "../../../../../assets/courseDetails/fullstack.webp";

import java from "../../../../../assets/courseDetails/java.webp";
import microbit from "../../../../../assets/courseDetails/microbit.webp";

import mobile from "../../../../../assets/courseDetails/mobile.webp";
import python from "../../../../../assets/courseDetails/python.webp";

import roadToUni from "../../../../../assets/courseDetails/roadToUni.webp";
import roblox from "../../../../../assets/courseDetails/roblox.webp";
import advPython from "../../../../../assets/courseDetails/advPython.webp";

import { Link } from "next/navigation";
import { useLangPath } from "../../../../../guardlang";

export const Scratch = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Block Coder : The Journey of Superpower
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={scratch} alt="Scratch" className=" rounded-xl" />
        <Link
          to={langPath("/courses/blockcode/scratch")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Octo = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Dino Code : Adventures of Gong
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={octoStudio} alt="Dino Code" className=" rounded-xl" />
        <Link
          to={langPath("/courses/blockcode/dino")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const ThreeDeeModel = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        3D Modelling : Design and Create
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={threeDeeModel} alt="3D Modelling" className=" rounded-xl" />
        <Link
          to={langPath("/courses/mechanical/3dmodeling")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Arduino = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Arduino : Basic Board and Circuit
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={arduino} alt="Arduino" className=" rounded-xl" />
        <Link
          to={langPath("/courses/mechanical/arduino")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const DesignThinking = () => {
  const langPath = useLangPath();
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Design Thinking : BunBun&#39;s Journey
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={designThinking} alt="Design Thinking" className=" rounded-xl" />
        <Link
          to={langPath("/courses/noncode/designthinking")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const FullStack = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Full-stack Web Development with Python
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={fullstack} alt="Full-stack Web Development" className=" rounded-xl" />
        <Link
          to={langPath("/courses/creative/fullstackweb")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Java = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Basic Coding with Java
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={java} alt="Java" className=" rounded-xl" />
        <Link
          to={langPath("/courses/fundamental/java")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Microbit = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Microbit : Get creative and connected
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={microbit} alt="Microbit" className=" rounded-xl" />
        <Link
          to={langPath("/courses/mechanical/microbit")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Mobile = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Mobile App Development
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={mobile} alt="Mobile App Development" className=" rounded-xl" />
        <Link
          to={langPath("/courses/creative/mobile")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Python = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Basic Coding with Python
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={python} alt="Python" className=" rounded-xl" />
        <Link
          to={langPath("/courses/fundamental/python")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const RoadToUni = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Road to University
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={roadToUni} alt="Road to University" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Roblox = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Roblox : Game Development
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={roblox} alt="Roblox" className=" rounded-xl" />
        <Link
          to={langPath("/courses/creative/roblox")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export const AdvPython = () => {
  const langPath = useLangPath();

  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Advanced Coding with Python
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <Image src={advPython} alt="Advanced Python" className=" rounded-xl" />
        <Link
          to={langPath("/courses/fundamental/advpython")}
          className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};
