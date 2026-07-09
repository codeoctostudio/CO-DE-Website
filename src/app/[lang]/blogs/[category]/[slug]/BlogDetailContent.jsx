"use client";

import { useState, useEffect } from "react";
import Header from "@/component/header/Header";
import Nav from "@/component/header/Nav";
import Footer from "@/component/homepage/components/Footer";
import Message from "@/component/msg/Message";
import BackToTop from "@/component/msg/Backtotop";
import AnnouncementBar from "@/component/msg/Announcements";
import { useLanguage } from "@/hook/useLanguage";

// ใช้ Component นี้ตัวเดียวสำหรับทุกบทความย่อย
import DynamicBlogContent from "./components/DynamicBlogContent";

export default function BlogDetailContent({ lang, dict, blogData }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { langPath } = useLanguage();
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: `Blog: ${blogData?.slug}`,
    });
  }, [blogData?.slug]);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      {/* ส่งข้อมูลบทความเข้าไปใน Component ตัวเดียวเลย ไม่ต้อง switch-case แล้ว */}
      {/* // ตัวอย่างการเรียกใน BlogDetailContent */}
      <DynamicBlogContent
        dict={dict}
        lang={lang}
        blogData={blogData}
        langPath={langPath}
      />
      <Footer />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Message announcementVisible={announcementVisible} />
      <BackToTop />
    </>
  );
}
