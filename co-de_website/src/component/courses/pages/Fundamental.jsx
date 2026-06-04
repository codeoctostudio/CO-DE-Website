import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "../../../assets/slideImages/Fundamental/img1.webp";
import img2 from "../../../assets/slideImages/Fundamental/img2.webp";
import img3 from "../../../assets/slideImages/Fundamental/img3.webp";
import img4 from "../../../assets/slideImages/Fundamental/img4.webp";
import img5 from "../../../assets/slideImages/Fundamental/img5.webp";
import python from "../../../assets/courseDetails/python.webp";
import advPython from "../../../assets/courseDetails/advPython.webp";
import java from "../../../assets/courseDetails/java.webp";
import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";
import { useLangPath } from "../../../guardlang";

const Fundamental = () => {
  const { t, i18n } = useTranslation();
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const langPath = useLangPath();

  const texts = {
    p1: "The beginning of strong academic coding background",
    p2: "Our fundamental coding class focuses on teaching the concept of coding theory, making it ideal for learners who have a specific purpose in mind for their future programming endeavors, or for those who need a strong foundational understanding of coding theory for future studies in coding programs.",
    p3: "Strong basic is everything",
    p4: "A strong foundation in coding is essential for programmers, and we understand this deeply. That's why our course focuses primarily on strengthening your fundamental skills. With diverse exercises and expert instructors with strong academic backgrounds, we aim to build your confidence in navigating the coding world.",
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
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t("Course_fundamental_Page")}</title>
        <meta name="description" content="คอร์สเรียน Coding สำหรับเด็ก เริ่มต้นได้ตั้งแต่อายุ 4 ปี" />
        <meta name="keywords" content="coding เด็ก, สอน Coding, Scratch, Python" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="CO-DE Coding School" />
        <meta property="og:description" content="เรียน Coding สำหรับเด็กแบบสนุก เข้าใจง่าย" />
        <meta property="og:image" content="/cover.jpg" />
      </Helmet>
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
