import { useState, useEffect } from "react";
import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../../../homepage/components/Footer";
import Message from "../../../msg/Message";
import MobileCourse from "./MobileCourse";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import BackToTop from "../../../msg/Backtotop";
import AnnouncementBar from "../../../msg/Announcements";

const MobilePage = () => {
  const { t, i18n } = useTranslation();
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Mobile Dev Page",
    });
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t("Course_creative_mobile_Page")}</title>
        <meta name="description" content="คอร์สเรียน Mobile Development สำหรับเด็ก" />
        <meta name="keywords" content="mobile development, เด็ก, สอนเขียนโปรแกรม" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="CO-DE Coding School" />
        <meta property="og:description" content="เรียน Mobile Development สำหรับเด็กแบบสนุก เข้าใจง่าย" />
        <meta property="og:image" content="/cover.jpg" />
      </Helmet>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <MobileCourse />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default MobilePage;
