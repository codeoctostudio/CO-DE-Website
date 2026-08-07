"use client";

import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";
import { useLanguage } from "@/hook/useLanguage";

import img2 from "@/assets/slideImages/Mechanical/img1.webp";
import img1 from "@/assets/slideImages/Mechanical/img2.webp";
import img3 from "@/assets/slideImages/Mechanical/img3.webp";
import microbit from "@/assets/courseDetails/microbit.webp";
import threeDee from "@/assets/courseDetails/3DModel.webp";
import arduino from "@/assets/courseDetails/arduino.webp";

import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";

const Mechanical = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const { dict, langPath } = useLanguage();

  const texts = {
    p1: dict.course_mechanical_1,
    p2: dict.course_mechanical_2,
    p3: dict.course_mechanical_3,
    p4: dict.course_mechanical_4,
  };

  const coursesData = [
    {
      pic: microbit,
      title: "Microbit : Get creative and connected",
      portal: langPath("/courses/mechanical/microbit"),
    },
    {
      pic: threeDee,
      title: "3D Modeling : Design and Create",
      portal: langPath("/courses/mechanical/3dmodeling"),
    },
    {
      pic: arduino,
      title: "Basic Circuit Boards and Arduino",
      portal: langPath("/courses/mechanical/arduino"),
    },
  ];
  const slideShowData = [img1, img2, img3];

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Mechanical Page",
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

export default Mechanical;
