import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "../../../assets/slideImages/Creative/img1.webp";
import img2 from "../../../assets/slideImages/Creative/img2.webp";
import img3 from "../../../assets/slideImages/Creative/img3.webp";
import img4 from "../../../assets/slideImages/Creative/img4.webp";
import roblox from "../../../assets/courseDetails/roblox.webp";
import fullstack from "../../../assets/courseDetails/fullstack.webp";
import mobile from "../../../assets/courseDetails/mobile.webp";

import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";
import { useLangPath } from "../../../guardlang";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Creative = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const langPath = useLangPath();
  const { t, i18n } = useTranslation();


  const texts = {
    p1: "Make your imagination come alive with code",
    p2: "Imagination is where it all begins, and we'd hate to squash it. Our creative coding program is designed to make coding more tangible.From building websites to creating awesome games, your child's imagination will come to life through coding.If you believe in spelling magic, let's make your magic happen through code.",
    p3: "Creative ideas combined with a creative learning experience",
    p4: "Our coding class embraces the concept of learning through play, providing an environment where children can explore their interests while mastering coding skills.Similar to a carefully designed house, our curriculum is structured to encourage learning based on their curiosity and passions, making the educational journey both enjoyable and enriching.",
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
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t("Course_creative_Page")}</title>
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

export default Creative;
