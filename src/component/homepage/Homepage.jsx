"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "../header/Header";
import Layer1 from "./components/Layer1";
import Layer2 from "./components/Layer2";
import Layer3 from "./components/Layer3";
import Layer4 from "./components/Layer4";
import Nav from "../header/Nav";
import Message from "../msg/Message";
import RewardLayer from "./components/RewardLayer";

import BackToTop from "../msg/Backtotop";
import AnnouncementBar from "../msg/Announcements";
const Homepage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const rewardRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Home Page",
    });
  }, []);

  return (
    <div className="">
      <Header toggle={toggleNav} rewardRef={rewardRef} />
      <Nav isVisible={isNavOpen} />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Layer4 />
      <div ref={rewardRef}>
        <RewardLayer />
      </div>
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} rewardRef={rewardRef} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </div>
  );
};

export default Homepage;
