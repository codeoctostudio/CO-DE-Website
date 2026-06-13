"use client";

import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message";
import Python from "./components/Python";

import BackToTop from "../msg/Backtotop";
import AnnouncementBar from "../msg/Announcements";

const PythonPage = () => {
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
      page_name: "Python Page",
    });
  }, []);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />

      <Python />

      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
};

export default PythonPage;
