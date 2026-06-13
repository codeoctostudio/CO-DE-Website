"use client";

import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav";
import Footer from "../homepage/components/Footer";
import Detail from "./components/Detail";
import Message from "../msg/Message";
import BackToTop from "../msg/Backtotop";
import AnnouncementBar from "../msg/Announcements";
const AboutUs = () => {
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
      page_name: "About Us Page",
    });
  }, []);
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <Detail />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default AboutUs;
