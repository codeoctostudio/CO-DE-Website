"use client";

import menu from "@/assets/bannerLong/menu.webp";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CourseList = (props) => {
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "th";
  const currentLang = lang;
  const langPath = (path) => {
    return `/${lang}${path}`;
  };
  const coursesArray = props.courses || [];

  const listOfCourses = coursesArray.map((course) => (
    <Link
      onClick={course.analytics}
      href={course.direct || "#"}
      key={course.id}
      className={`w-[90%] cursor-pointer transition-transform duration-500 hover:scale-105 lg:w-[85%] xl:w-[75%] ${
        course === coursesArray[0]
          ? "rounded-t-xl"
          : course === coursesArray[coursesArray.length - 1]
            ? "rounded-b-xl"
            : ""
      }`}
    >
      <Image
        className={`${
          course === coursesArray[0]
            ? "rounded-t-xl"
            : course === coursesArray[coursesArray.length - 1]
              ? "rounded-b-xl"
              : ""
        }`}
        src={course.image}
        alt="our course"
        width={1200}
        height={400}
        loading="lazy"
      />
    </Link>
  ));

  return (
    <div className="flex h-full w-full flex-col items-center overflow-x-hidden bg-[#042451] pt-[150px] font-comfortaa text-white">
      <p className="mb-10 text-center text-4xl">Our Courses</p>
      <Image
        src={menu}
        alt="menu"
        className="mb-32 w-[80%] rounded-3xl transition-all duration-500 hover:w-[95%] md:w-[70%] md:hover:w-[85%] md:active:w-[85%] "
        width={1200}
        height={600}
        loading="eager"
        priority
        decoding="async"
      />

      <section className="mb-20 flex h-full flex-col items-center gap-0.5 w-full">
        {listOfCourses}
      </section>

      <section className="flex w-full flex-col items-center ">
        <p className="w-[80%] text-center text-3xl md:text-4xl">
          Let your children experience Start-up culture from a young age
        </p>
        <p className="my-14 w-[80%] text-center text-lg md:text-xl opacity-80">
          Our institute emphasizes teaching in a way that allows students to do
          real things using the project based learning method . And with the
          format of the institute in which we adopt a Tech Start-up culture, we
          therefore emphasize giving the students a platform to Pitching and
          presenting your own work. Our team of teachers will guide and help
          you. in doing a project so that our students can present their work.
        </p>
      </section>

      <section className="mb-20 flex w-[90%] flex-col items-center md:flex-row md:justify-center lg:w-[50%] ">
        <Link
          href={langPath("/contactUs")}
          className="bold mb-11 w-full rounded-[50px] bg-[#F7C94B] p-3 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880] active:opacity-80 sm:w-[45%] md:m-0 md:p-4 md:hover:scale-105"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default CourseList;
