import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const CourseSetup = (props) => {
  const courses = props.coursesData.map((course, index) => (
    <div key={index} className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6 w-[80%]  text-center text-2xl text-[#FDFF86]  md:text-3xl xl:text-4xl">
        {course.title}
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={course.pic} alt="Our Course" className=" rounded-xl" loading="lazy" />
        <Link
          to={course.portal}
          className=" absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]"
        >
          More Details
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white">
      <Carousel
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        className="mb-28 w-[80%] rounded-2xl border-8 border-black md:w-[70%]  xl:w-[60%] "
      >
        {props.slideshow.map((item, index) => (
          <img
            className="object-cover "
            key={index}
            src={item}
            alt="Our Course"
            loading="eager"
          />
        ))}
      </Carousel>

      <p className=" w-[80%] text-center text-2xl text-[#FDFF86] md:text-3xl xl:text-4xl">
        {props.texts.p1}
      </p>

      <p className="mb-28 mt-8 w-[80%] text-center text-base md:text-lg lg:text-xl">
        {props.texts.p2}
      </p>

      <p className="w-[80%] text-center text-2xl text-[#FDFF86] md:text-3xl xl:text-4xl">
        {props.texts.p3}
      </p>
      <p className="mb-28 mt-8 w-[80%] text-center text-base md:text-lg lg:text-xl">
        {props.texts.p4}
      </p>

      {courses}
    </div>
  );
};

export default CourseSetup;
