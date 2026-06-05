import { useContext, useState } from "react";
import { CheckBoxContext } from "../../../context/CheckBoxContext";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/courses/squarebanner01.webp"
import img2 from "@/assets/courses/squarebanner02.webp"
import img3 from "@/assets/courses/squarebanner05.webp"
import img4 from "@/assets/courses/squarebanner04.webp"
import img5 from "@/assets/courses/squarebanner03.webp"
import img6 from "@/assets/courses/squarebanner06.webp"
import img7 from "@/assets/searchfilter/age.webp"
import img8 from "@/assets/searchfilter/graph.webp"
import img9 from "@/assets/others/info.webp"
import img10 from "@/assets/searchfilter/laptop.webp"
import { useLanguage } from "@/hook/useLanguage";

const Layer3 = () => {
  const {dict, lang, langPath} = useLanguage();

  const [radio, setRadio, filter, setFilter] = useContext(CheckBoxContext) || [];

  const [showNewbie, setShowNewbie] = useState(false);
  const [showExplorer, setShowExplorer] = useState(false);
  const [showMaster, setShowMaster] = useState(false);

  const handleNewbie = () => setShowNewbie((prev) => !prev);
  const handleExplorer = () => setShowExplorer((prev) => !prev);
  const handleMaster = () => setShowMaster((prev) => !prev);

  const googleEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "custom_course_search",
      age: filter,
      skill_level: radio,
    });
  };

  const courses = [
    {
      image: img1,
      courseName: dict.layer3_0_1,
      forKids: dict.layer3_0_1_1,
      age: dict.layer3_0_2,
      direct: langPath("/courses/noncode"),
      color: "to-yellow-100",
    },
    {
      image: img2,
      courseName: dict.layer3_1_1,
      forKids: dict.layer3_1_1_1,
      age: dict.layer3_1_2,
      direct: langPath("/courses/blockcode"),
      color: "to-green-100",
    },
    {
      image: img3,
      courseName: dict.layer3_2_1,
      forKids: dict.layer3_2_1_1,
      age: dict.layer3_2_2,
      direct: langPath("/courses/mechanical"),
      color: "to-orange-100",
    },
    {
      image: img4,
      courseName: dict.layer3_3_1,
      forKids: dict.layer3_3_1_1,
      age: dict.layer3_3_2,
      direct: langPath("/courses/creative"),
      color: "to-pink-100",
    },
    {
      image: img5,
      courseName: dict.layer3_4_1,
      forKids: dict.layer3_4_1_1,
      age: dict.layer3_4_2,
      direct: langPath("/courses/fundamental"),
      color: "to-blue-100",
    },
    {
      image: img6,
      courseName: dict.layer3_5_1,
      forKids: dict.layer3_5_1_1,
      age: dict.layer3_5_2,
      direct: langPath("/courses/university"),
      color: "to-green-100",
    },
  ];

  const coursesBox = courses?.map((course, index) => (
    <Link
      href={course.direct}
      key={index}
      className="mb-6 flex h-full flex-col rounded-br-[30px] rounded-tl-[30px] bg-white transition-transform duration-300 hover:scale-105"
    >
      {/* Banner รูปคอร์ส ปรับให้ Responsive ตาม Container */}
      <Image 
        src={course.image} 
        alt={course.courseName} 
        width={400} 
        height={400}
        className="rounded-tl-[30px] w-full h-auto"
        loading="lazy" 
      />

      <div className={`flex flex-1 flex-col justify-center p-3 bg-gradient-to-b from-white ${course.color} rounded-br-[30px]`}>
        <div>
          <p className="mb-2 text-center font-semibold text-sm leading-relaxed sm:text-base md:text-base lg:text-lg xl:text-xl">
            {course.courseName}
            <br />
            <span className="font-normal text-xs sm:text-sm md:text-sm lg:text-base">
              {course.forKids}
            </span>
          </p>
        </div>
        <p className="text-center text-[11px] p-1 leading-relaxed sm:text-xs md:text-sm lg:text-sm xl:text-base line-clamp-3">
          {course.age}
        </p>
      </div>
    </Link>
  ));

  return (
    <section>
      <div id="layer3" className="-mt-16 flex h-full w-full flex-col items-center bg-[#042451] py-24 font-comfortaa md:-mt-10">
        <h2 className={`mx-auto mb-4 max-w-[90%] ${lang === "th" ? "font-looped" : ""} text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl`}>
          {dict.layer3_1}
          <br className="block sm:hidden" />
          {dict.layer3_1_0}
        </h2>

        <p className="mx-auto mb-10 max-w-[85%] text-center text-base leading-relaxed text-white sm:text-lg lg:mb-14 lg:text-xl">
          {dict.layer3_2}
        </p>
        
        <div className="m-auto mb-10 grid w-[75%] grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3">
          {coursesBox}
        </div>

        <Link
          href={langPath("/courses")}
          className="bold mb-16 w-full max-w-[280px] cursor-pointer rounded-full bg-[#F7C94B] px-4 py-2 text-center font-comfortaa text-sm text-white drop-shadow-lg transition-all duration-300 hover:bg-[#EA5880] active:opacity-80 sm:max-w-[300px] sm:text-base md:px-6 md:py-3 md:text-lg md:hover:scale-105"
        >
          {dict.layer3_3}
        </Link>

        {/* Filter Section */}
        <section id="filterbutton" className="border-neutral-800 flex w-[90%] flex-col items-center rounded-3xl bg-[#f3e49a] p-8 text-black drop-shadow-2xl">
          <p className={`mb-4 text-center text-2xl lg:text-3xl ${lang === "th" ? "font-looped" : ""}`}>
            {dict.layer3_4}
          </p>
          <p className="mb-8 text-center text-lg lg:text-xl">
            {dict.layer3_5}
          </p>
          
          <div className="flex w-full flex-col justify-between md:flex-row">
            {/* Age Filter */}
            <section className="mb-10 flex w-full flex-col items-center gap-10 md:mb-0 md:w-[30%]">
              <div className="flex flex-col items-center">
                <Image src={img7} alt="Age Icon" width={80} height={80} className="mb-4" />
                <p className="text-center text-lg font-normal lg:text-xl">
                  {dict.layer3_6}
                </p>
              </div>
              <select
                name="filter"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                className="rounded-lg border-2 border-[#F7C94B] bg-[#F7C94B] p-2 text-lg font-bold text-white drop-shadow-lg"
              >
                {["4+", "5.5+", "6+", "7+", "8+", "9+", "10+", "12+", "15+"].map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </section>

            {/* Skill Level Filter */}
            <section className="mb-10 flex w-full flex-col items-center gap-10 md:mb-0 md:w-[30%]">
              <div className="flex flex-col items-center">
                <Image src={img8} alt="Skill Level Icon" width={80} height={80} className="mb-4" />
                <p className="text-center text-lg font-normal lg:text-xl">
                  {dict.layer3_7}
                </p>
              </div>
              <div className="flex flex-col">
                {/* Newbie */}
                <div className="mb-5 flex w-full items-center">
                  <input type="radio" id="newbie" name="skill" value="newbie" className="mr-3 h-6 w-6" checked={radio === "newbie"} onChange={(e) => setRadio(e.target.value)} />
                  <label htmlFor="newbie" className="mr-3 text-lg">{dict.layer3_7_1}</label>
                  <div onMouseEnter={handleNewbie} onMouseLeave={handleNewbie} className="relative h-5 w-5">
                    <Image src={img9} alt="Info Icon" width={20} height={20} />
                    <div className={`absolute bottom-5 left-[20px] h-40 w-40 items-center justify-center rounded-t-full rounded-br-full bg-[#FFEDB3] px-5 text-center drop-shadow-xl ${showNewbie ? "flex" : "hidden"}`}>
                      <p className="text-xs">{dict.layer3_7_1_1}</p>
                    </div>
                  </div>
                </div>

                {/* Explorer */}
                <div className="mb-5 flex w-full items-center">
                  <input type="radio" id="explorer" name="skill" value="explorer" className="mr-3 h-6 w-6" checked={radio === "explorer"} onChange={(e) => setRadio(e.target.value)} />
                  <label htmlFor="explorer" className="mr-3 text-lg">{dict.layer3_7_2}</label>
                  <div onMouseEnter={handleExplorer} onMouseLeave={handleExplorer} className="relative h-5 w-5">
                    <Image src={img9} alt="Info Icon" width={20} height={20} />
                    <div className={`absolute bottom-5 left-[20px] h-40 w-40 items-center justify-center rounded-t-full rounded-br-full bg-[#FFEDB3] px-5 text-center drop-shadow-xl ${showExplorer ? "flex" : "hidden"}`}>
                      <p className="text-xs">{dict.layer3_7_2_1}</p>
                    </div>
                  </div>
                </div>

                {/* Master */}
                <div className="mb-5 flex w-full items-center">
                  <input type="radio" id="master" name="skill" value="master" className="mr-3 h-6 w-6" checked={radio === "master"} onChange={(e) => setRadio(e.target.value)} />
                  <label htmlFor="master" className="mr-3 text-lg">{dict.layer3_7_3}</label>
                  <div onMouseEnter={handleMaster} onMouseLeave={handleMaster} className="relative h-5 w-5">
                    <Image src={img9} alt="Info Icon" width={20} height={20} />
                    <div className={`absolute bottom-5 left-[20px] h-40 w-40 items-center justify-center rounded-t-full rounded-br-full bg-[#FFEDB3] px-5 text-center drop-shadow-xl ${showMaster ? "flex" : "hidden"}`}>
                      <p className="text-xs">{dict.layer3_7_3_1}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Laptop Filter Link */}
            <section className="mb-10 flex w-full flex-col items-center gap-10 md:mb-0 md:w-[30%]">
              <div className="flex flex-col items-center">
                <Image src={img10} alt="Laptop Icon" width={80} height={80} className="mb-4" />
                <p className="text-center text-lg font-normal lg:text-xl">
                  {dict.layer3_8}
                </p>
              </div>
              <Link
                href={langPath("/customCourse")}
                onClick={googleEvent}
                className="bold w-[150px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880] active:opacity-80 md:p-4 md:hover:scale-105"
              >
                {dict.layer3_9}
              </Link>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Layer3;