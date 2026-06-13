"use client";

import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav.jsx";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message.jsx";

import KidsPro from "./components/KidsPro.jsx";
import BackToTop from "../msg/Backtotop.jsx";
import AnnouncementBar from "../msg/Announcements.jsx";
const KidsProject = () => {
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
      page_name: "KidsProject Page",
    });
  }, []);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <KidsPro />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default KidsProject;
