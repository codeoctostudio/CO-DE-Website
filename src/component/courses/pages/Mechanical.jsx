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
  const { langPath } = useLanguage();

  const texts = {
    p1: "Make your idea tangible",
    p2: "At the heart of our Mechanical Innovation course lies a firm belief in the boundless creativity of every child. Beginning with crafting their own 3D models, understanding electrical circuits, and mastering the integration of embedded systems to bring their creations to life. Beyond mechanical principles, our aim is to instill in them an engineering mindset—a mindset that sparks curiosity, problem- solving, and innovation.",
    p3: "Launching into Engineering perspective",
    p4: "Instilling an engineering mindset in young minds, we equip them to approach problems systematically, teaching them to think methodically and break down complex issues into manageable steps. Through hands-on activities and interactive learning experiences, students develop critical thinking skills and apply engineering principles to real- world scenarios.",
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
