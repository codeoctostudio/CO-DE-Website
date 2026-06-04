"use client";

import { useState, useEffect } from "react";

import Footer from "../homepage/components/Footer";
import BackToTop from "../msg/Backtotop.jsx";
import Header from "../header/Header.jsx";
import Nav from "../header/Nav.jsx";
import ThankYou from "../homepage/components/Thankyou.jsx";

const Thankyou = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Thank you Trial Class Page",
    });
  }, []);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <ThankYou />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Thankyou;
