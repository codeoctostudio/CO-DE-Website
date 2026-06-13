import React from "react";
import ProjectContainer from "./ProjectContainer";
import thynn from "@/assets/Projects/plane.gif";
import Dino1 from "@/assets/Projects/Dino1.gif";
import Dino2 from "@/assets/Projects/Dino2.gif";
import BC1 from "@/assets/Projects/BlockCoder1.gif";
import BC2 from "@/assets/Projects/BlockCoder2.gif";
import BC3 from "@/assets/Projects/BlockCoder3.gif";
import BC4 from "@/assets/Projects/BlockCoder4.gif";
import Roblox1 from "@/assets/Projects/Roblox01.gif";
import Roblox2 from "@/assets/Projects/Roblox02.gif";
import Roblox3 from "@/assets/Projects/Roblox03.gif";
import Roblox4 from "@/assets/Projects/Roblox04.gif";
import Roblox5 from "@/assets/Projects/Roblox05.gif";
import Roblox6 from "@/assets/Projects/Roblox06.gif";
import Mobile from "@/assets/Projects/Mobile.gif";
import Python02 from "@/assets/Projects/Python02.gif";
const KidsPro = () => {
  const projects = [
    {
      class: "Dino Code 01",
      name: "Oliver",
      projectname: "Oliver and Mr. Turtle",
      age: "6",
      pic: Dino1,
    },
    {
      class: "Dino Code 02",
      name: "Cherlin",
      projectname: "Meet my friend",
      age: "6",
      pic: Dino2,
    },
    {
      class: "BlockCoder with scratch 01",
      name: "Pete",
      projectname: "Car Race",
      age: "9",
      pic: BC1,
    },
    {
      class: "BlockCoder with scratch 02",
      name: "Gene",
      projectname: "Pink Cat Pong",
      age: "8",
      pic: BC2,
    },
    {
      class: "BlockCoder with scratch 03",
      name: "Qiqi",
      projectname: "Mario Game",
      age: "8",
      pic: BC3,
    },
    {
      class: "BlockCoder with scratch 04",
      name: "Google",
      projectname: "Fishing",
      age: "8",
      pic: BC4,
    },
    {
      class: "Roblox 01",
      name: "Aomam",
      projectname: "A Normal Puzzle Game",
      age: "12",
      pic: Roblox1,
    },
    {
      class: "Roblox 02",
      name: "Yada",
      projectname: "Crossing The River",
      age: "11",
      pic: Roblox2,
    },
    {
      class: "Roblox 03",
      name: "Tyme",
      projectname: "To the moon!",
      age: "12",
      pic: Roblox3,
    },
    {
      class: "Roblox 04",
      name: "Pun",
      projectname: "Escape",
      age: "13",
      pic: Roblox4,
    },
    {
      class: "Roblox 05",
      name: "Birdy",
      projectname: "Underwater Aqua",
      age: "10",
      pic: Roblox5,
    },
    {
      class: "Roblox 06",
      name: "Atom",
      projectname: "Secret Room",
      age: "12",
      pic: Roblox6,
    },
    {
      class: "Python",
      name: "Chacha",
      projectname: "To Do List",
      age: "14",
      pic: Python02,
    },
    {
      class: "Mobile App Developer",
      name: "Tonnam",
      projectname: "CARDIA",
      age: "12",
      pic: Mobile,
    },
  ];

  return (
    <>
      <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white ">
        <p className="mb-10  w-[80%] text-center text-3xl md:text-4xl">
          Our Kids' Project
        </p>
        <div className=" mb-10 flex w-[80%] flex-wrap justify-evenly">
          {projects.map((item, index) => (
            <ProjectContainer
              key={index}
              class={item.class}
              name={item.name}
              projectname={item.projectname}
              age={item.age}
              pic={item.pic}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default KidsPro;
