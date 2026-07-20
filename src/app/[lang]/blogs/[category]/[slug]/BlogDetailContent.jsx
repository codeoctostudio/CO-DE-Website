"use client";

import { useState, useEffect } from "react";
import Header from "@/component/header/Header";
import Nav from "@/component/header/Nav";
import Footer from "@/component/homepage/components/Footer";
import Message from "@/component/msg/Message";
import BackToTop from "@/component/msg/Backtotop";
import AnnouncementBar from "@/component/msg/Announcements";
import { useLanguage } from "@/hook/useLanguage";

// Component หลักในการวาดบล็อกแบบ Dynamic
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

    // ดึง Title หรือข้อมูลตามภาษา (Fall back ไปภาษาไทยถ้าภาษาปัจจุบันไม่มีข้อมูล)
    const currentLang = lang === "th" || lang === "en" ? lang : "th";
    const blogTitle = blogData?.[currentLang]?.ctaTitle || blogData?.["th"]?.ctaTitle || "Blog Detail";

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: `Blog: ${blogData?.slug}`,
      blog_title: blogTitle, // ส่งชื่อบทความจริงเข้า DataLayer แทนคีย์ i18n
      blog_category: blogData?.categoryType,
    });
  }, [blogData, lang]);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      
      {/* ส่งข้อมูล blogData ที่มีโครงสร้าง th และ en เข้าไปตรงๆ 
        เพื่อให้ DynamicBlogContent นำไปแกะเรนเดอร์ตาม lang ได้เลย
      */}
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