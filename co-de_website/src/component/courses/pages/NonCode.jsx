"use client";

import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "@/assets/slideImages/nonCode/img1.webp";
import img2 from "@/assets/slideImages/nonCode/img2.webp";
import img3 from "@/assets/slideImages/nonCode/img3.webp";
import img4 from "@/assets/slideImages/nonCode/img4.webp";
import img5 from "@/assets/slideImages/nonCode/img5.webp";
import designThinking from "@/assets/courseDetails/designThinking.webp";
import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";
import { useLanguage } from "@/hook/useLanguage";
const NonCode = () => {
  const {dict, langPath} = useLanguage();

  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const texts = {
    p1: dict.designthink_1,
    p2: dict.designthink_2,
    p3: dict.designthink_3,
    p4: dict.designthink_4,
  };

  const coursesData = [
    {
      pic: designThinking,
      title: "Design Thinking : BunBun's Journey",
      portal: langPath("/courses/noncode/designthinking"),
    },
  ];
  const slideShowData = [img1, img2, img3, img4, img5];

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Non-Code Page",
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

export default NonCode;
