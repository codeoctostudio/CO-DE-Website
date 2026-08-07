"use client";

import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "@/assets/slideImages/Fundamental/img1.webp";
import img2 from "@/assets/slideImages/Fundamental/img2.webp";
import img3 from "@/assets/slideImages/Fundamental/img3.webp";
import img4 from "@/assets/slideImages/Fundamental/img4.webp";
import img5 from "@/assets/slideImages/Fundamental/img5.webp";
import python from "@/assets/courseDetails/python.webp";
import advPython from "@/assets/courseDetails/advPython.webp";
import java from "@/assets/courseDetails/java.webp";

import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";
import { useLanguage } from "@/hook/useLanguage";

const Fundamental = () => {
  const { dict, langPath } = useLanguage();
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const texts = {
    p1: dict.course_fundamental_1,
    p2: dict.course_fundamental_2,
    p3: dict.course_fundamental_3,
    p4: dict.course_fundamental_4,
  };

  const coursesData = [
    {
      pic: python,
      title: "Basic Coding with Python",
      portal: langPath("/courses/fundamental/python"),
    },
    {
      pic: advPython,
      title: "Advanced Coding with Python",
      portal: langPath("/courses/fundamental/advpython"),
    },
    {
      pic: java,
      title: "Basic Coding with Java",
      portal: langPath("/courses/fundamental/java"),
    },
  ];
  const slideShowData = [img1, img2, img3, img4, img5];

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Fundamental Page",
    });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <CourseSetup
        slideshow={slideShowData}
        coursesData={coursesData}
        texts={texts}
      />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default Fundamental;
