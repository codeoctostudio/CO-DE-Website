"use client";

import Header from "../header/Header.jsx";
import Nav from "../header/Nav.jsx";
import { useState, useEffect } from "react";
import Information from "./components/Information";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message.jsx";
import BackToTop from "../msg/Backtotop.jsx";
import AnnouncementBar from "../msg/Announcements.jsx";

const Contact = () => {
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
      page_name: "Contact Us Page",
    });
  }, []);
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <Information />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default Contact;
