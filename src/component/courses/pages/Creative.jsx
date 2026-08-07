"use client";

import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";

import img1 from "../../../assets/slideImages/Creative/img1.webp";
import img2 from "../../../assets/slideImages/Creative/img2.webp";
import img3 from "../../../assets/slideImages/Creative/img3.webp";
import img4 from "../../../assets/slideImages/Creative/img4.webp";
import roblox from "../../../assets/courseDetails/roblox.webp";
import fullstack from "../../../assets/courseDetails/fullstack.webp";
import mobile from "../../../assets/courseDetails/mobile.webp";

import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";
import { useLanguage } from "@/hook/useLanguage";

const Creative = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const { dict, langPath } = useLanguage();

  const texts = {
    p1: dict.course_creative_1,
    p2: dict.course_creative_2,
    p3: dict.course_creative_3,
    p4: dict.course_creative_4,
  };

  const coursesData = [
    {
      pic: roblox,
      title: " Roblox Game Developer",
      portal: langPath("/courses/creative/roblox"),
    },
    {
      pic: fullstack,
      title: "Full-stack Web Development with Python",
      portal: langPath("/courses/creative/fullstackweb"),
    },
    {
      pic: mobile,
      title: "Mobile App Developer",
      portal: langPath("/courses/creative/mobile"),
    },
  ];
  const slideShowData = [img1, img2, img3, img4];

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Creative Page",
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

export default Creative;
