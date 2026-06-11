"use client";

import { useEffect, useState } from "react";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message.jsx";
import Nav from "../header/Nav.jsx";

import BackToTop from "../msg/Backtotop.jsx";
import RegisterPage from "./RegisterPage.jsx";
import Header from "../header/Header.jsx";

const Register = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Student Registration Page",
    });
  }, []);
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <RegisterPage />
      <Footer />
      {/* <AnnouncementBar onVisibleChange={setAnnouncementVisible} /> */}
      <Message />
      <BackToTop />
    </>
  );
};

export default Register;
