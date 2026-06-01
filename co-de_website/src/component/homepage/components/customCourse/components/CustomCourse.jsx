/* eslint-disable no-unused-vars */
import { CheckBoxContext } from "../../../../../context/CheckBoxContext";
import { useContext } from "react";
import {
  Scratch,
  Octo,
  ThreeDeeModel,
  Arduino,
  DesignThinking,
  FullStack,
  Java,
  Microbit,
  Mobile,
  Python,
  RoadToUni,
  Roblox,
  AdvPython,
} from "./CoursesImports";

const CustomCourse = () => {
  const [radio, , filter] = useContext(CheckBoxContext);
  //Container of Imported Component Banners from CourseImports.jsx
  const customCourses = {
    custom1: [
      <Microbit key={0} />,
      <Roblox key={2} />,
      <ThreeDeeModel key={3} />,
    ],
    custom2: [
      <Microbit key={0} />,
      <Roblox key={2} />, 
      <ThreeDeeModel key={3} />,
      <Python key={4} />,
    ],
    custom3: [
      <Roblox key={0} />,
      <ThreeDeeModel key={1} />,
      <Python key={2} />,
    ],
    custom4: [
      <Roblox key={0} />,
      <ThreeDeeModel key={1} />,
      <Python key={2} />,
      <FullStack key={3} />,
    ],
    custom5: [
      <Roblox key={0} />,
      <ThreeDeeModel key={1} />,
      <Python key={2} />,
      <Arduino key={3} />,
    ],
    custom6: [
      <Roblox key={0} />,
      <ThreeDeeModel key={1} />,
      <Python key={2} />,
      <Arduino key={3} />,
      <FullStack key={4} />,
      <Mobile key={5} />,
      <AdvPython key={6} />,
    ],
    custom7: [
      <Roblox key={0} />,
      <ThreeDeeModel key={1} />,
      <Python key={2} />,
      <Arduino key={3} />,
      <Java key={4} />,
    ],
    custom8: [
      <Roblox key={0} />,
      <ThreeDeeModel key={1} />,
      <Python key={2} />,
      <Arduino key={3} />,
      <FullStack key={4} />,
      <Mobile key={5} />,
      <AdvPython key={6} />,
      <Java key={7} />,
    ],
    custom9: [
      <Roblox key={0} />,
      <ThreeDeeModel key={1} />,
      <Python key={2} />,
      <Arduino key={3} />,
      <FullStack key={4} />,
      <Mobile key={5} />,
      <AdvPython key={6} />,
      <Java key={7} />,
      <RoadToUni key={8} />,
    ],

    custom10: [<DesignThinking key={0} />],
    custom11: [<DesignThinking key={0} />, <Octo key={1} />],
    custom12: [<Octo key={0} />, <Scratch key={1} />],
    custom13: [<Scratch key={0} />],
    custom14: [<Scratch key={0} />, <Microbit key={1} />, "minecraft"],
  };

  const testContent = () => {
    switch (true) {
      // 9+
      case radio === "newbie" && filter === "9+":
        return customCourses.custom1;

      case (radio === "explorer" || radio === "master") && filter === "9+":
        return customCourses.custom2;

      // 10+
      case radio === "newbie" && filter === "10+":
        return customCourses.custom3;

      case (radio === "explorer" || radio === "master") && filter === "10+":
        return customCourses.custom4;

      // 12+
      case radio === "newbie" && filter === "12+":
        return customCourses.custom5;

      case (radio === "explorer" || radio === "master") && filter === "12+":
        return customCourses.custom6;

      // 15+
      case radio === "newbie" && filter === "15+":
        return customCourses.custom7;

      case radio === "explorer" && filter === "15+":
        return customCourses.custom8;

      case radio === "master" && filter === "15+":
        return customCourses.custom9;

      // 4+
      case (radio === "explorer" || radio === "master" || radio === "newbie") &&
        filter === "4+":
        return customCourses.custom10;

      // 5+
      case (radio === "explorer" || radio === "master" || radio === "newbie") &&
        filter === "5.5+":
        return customCourses.custom11;

      // 6+
      case (radio === "explorer" || radio === "master" || radio === "newbie") &&
        filter === "6+":
        return customCourses.custom12;

      // 7+
      case radio === "newbie" && filter === "7+":
        return customCourses.custom12;

      case (radio === "explorer" || radio === "master") && filter === "7+":
        return customCourses.custom13;

      // 8+
      case radio === "newbie" && filter === "8+":
        return customCourses.custom13;

      case (radio === "explorer" || radio === "master") && filter === "8+":
        return customCourses.custom14;

      // No matching condition
      default:
        return ["No Course Found"];
    }
  };

  const filteredCourse = testContent();

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white">
      <p className="mb-14 mt-28 w-[80%] text-center text-3xl md:text-4xl">
        Reccommended Courses
      </p>

      {filteredCourse.map((item) => item)}
    </div>
  );
};

export default CustomCourse;
