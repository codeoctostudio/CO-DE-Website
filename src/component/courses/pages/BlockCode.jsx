"use client";

import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";

import img1 from "@/assets/slideImages/blockCode/img1.webp";
import img2 from "@/assets/slideImages/blockCode/img2.webp";
import img3 from "@/assets/slideImages/blockCode/img3.webp";
import img4 from "@/assets/slideImages/blockCode/img4.webp";
import octo from "@/assets/courseDetails/octo.webp";
import scratch from "@/assets/courseDetails/scratch.webp";

import { useLanguage } from "@/hook/useLanguage";
import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";
const BlockCode = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const { dict, langPath } = useLanguage();


  const texts = {
    p1: dict.blockcoder_1,
    p2: dict.blockcoder_2,
    p3: dict.blockcoder_3,
    p4: dict.blockcoder_4,
  };
  const coursesData = [
    {
      pic: octo,
      title: "Dino Code : Adventures of Gong",
      portal: langPath("/courses/blockcode/dino"),
    },
    {
      pic: scratch,
      title: "Block Coder : The Journey of Superpower",
      portal: langPath("/courses/blockcode/scratch"),
    },
  ];
  const slideShowData = [img1, img2, img3, img4];

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Block-Code Page",
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

export default BlockCode;
