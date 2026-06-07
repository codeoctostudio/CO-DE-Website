"use client";

import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav.jsx";
import Playground from "./components/Playground";
import Classrooms from "./components/Classrooms";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message.jsx";

import BackToTop from "../msg/Backtotop.jsx";
import AnnouncementBar from "../msg/Announcements.jsx";
const OurPlayground = () => {
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
      page_name: "Playground Page",
    });
  }, []);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <Playground />
      <Classrooms />
      <Footer />
      <Message announcementVisible={announcementVisible} />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <BackToTop />
    </>
  );
};

export default OurPlayground;
