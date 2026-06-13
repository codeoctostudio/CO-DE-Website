"use client";

import Header from "../header/Header";
import Nav from "../header/Nav";
import { useState, useEffect } from "react";
import CourseList from "./components/CourseList";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message";

// import blockcode from "../../assets/bannerLong/blockcode_ENG.webp";
// import creative from "../../assets/bannerLong/creative_ENG.webp";
// import fundamental from "../../assets/bannerLong/fundamental_ENG.webp";
// import mechanical from "../../assets/bannerLong/mechanical_ENG.webp";
// import noncoding from "../../assets/bannerLong/noncoding_ENG.webp";
// import graduate from "../../assets/bannerLong/graduate_ENG.webp";

import BackToTop from "../msg/Backtotop";
import AnnouncementBar from "../msg/Announcements";
import { getDictionary } from "@/lib/dictionary";
import { usePathname } from "next/navigation";

// import {
//   designThinkingEvent,
//   blockCodeEvent,
//   mechanicalEvent,
//   fundamentalEvent,
//   creativeEvent,
//   universityEvent,
// } from "../../analytics";

const Course = () => {
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "th";
  const currentLang = lang;
  const dict = getDictionary(lang);
  const langPath = (path) => {
    return `/${lang}${path}`;
  };
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const courses = [
    {
      image: dict.noncoding,
      id: 12,
      direct: langPath("/courses/noncode"),
      // analytics: designThinkingEvent,
    },
    {
      image: dict.blockcode,
      id: 23,
      direct: langPath("/courses/blockcode"),
      // analytics: blockCodeEvent,
    },
    {
      image: dict.mechanical,
      id: 56,
      direct: langPath("/courses/mechanical"),
      // analytics: mechanicalEvent,
    },
    {
      image: dict.creative,
      id: 45,
      direct: langPath("/courses/creative"),
      // analytics: creativeEvent,
    },
    {
      image: dict.fundamental,
      id: 34,
      direct: langPath("/courses/fundamental"),
      // analytics: fundamentalEvent,
    },
    {
      image: dict.graduate,
      id: 67,
      direct: langPath("/courses/university"),
      // analytics: universityEvent,
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // ReactGA.send({ hitType: "pageview", title: "Courses Page" });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Courses Page",
    });
  }, []);
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <CourseList courses={courses} />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default Course;
