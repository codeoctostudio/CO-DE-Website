import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "../../../assets/slideImages/blockCode/img1.webp";
import img2 from "../../../assets/slideImages/blockCode/img2.webp";
import img3 from "../../../assets/slideImages/blockCode/img3.webp";
import img4 from "../../../assets/slideImages/blockCode/img4.webp";
import octo from "../../../assets/courseDetails/octo.webp";
import scratch from "../../../assets/courseDetails/scratch.webp";
import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";
import BackToTop from "../../msg/Backtotop";
import AnnouncementBar from "../../msg/Announcements";
import { useLangPath } from "../../../guardlang";
const BlockCode = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const { t, i18n } = useTranslation();
  const langPath = useLangPath();


  const texts = {
    p1: t("blockcoder_1"),
    p2: t("blockcoder_2"),
    p3: t("blockcoder_3"),
    p4: t("blockcoder_4"),
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
    // ReactGA.send({ hitType: "pageview", title: "Block-Code Page" });
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
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t("BlockCode_Page")}</title>
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

export default BlockCode;
