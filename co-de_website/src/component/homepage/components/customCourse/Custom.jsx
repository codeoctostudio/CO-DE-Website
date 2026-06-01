import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../Footer";
import CustomCourse from "./components/CustomCourse";
import { useState, useEffect } from "react";
import Message from "../../../msg/Message";
import { useTranslation } from "react-i18next";

import BackToTop from "../../../msg/Backtotop";
import AnnouncementBar from "../../../msg/Announcements";
const Custom = () => {
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Custom Courses Page",
    });
  }, []);

  

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <CustomCourse />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default Custom;
