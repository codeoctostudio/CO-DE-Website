"use client";
import { useState, useEffect } from "react";

import Footer from "../homepage/components/Footer";
import BackToTop from "../msg/Backtotop.jsx";
import Header from "../header/Header.jsx";
import TrialClass from "./Trialclass.jsx";
import Nav from "../header/Nav.jsx";

const TrialclassPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // ReactGA.send({ hitType: "pageview", title: "Free Trial Class Page" });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Free Trial Class Page",
    });

  }, []);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <TrialClass />
      <Footer />
      <BackToTop />
    </>
  );
};

export default TrialclassPage;
