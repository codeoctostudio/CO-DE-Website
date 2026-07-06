import WhatIsAI from "@/component/Trends/WhatIsAI";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${dict?.Blogs_Tech_2 || "AI คืออะไร และทำไมเด็กไทยต้องรู้ในศตวรรษที่ 21"} | CO-DE academy`,
    description:
      dict?.Des_What_is_AI_Page ||
      "AI คืออะไร? ทำไมเด็กต้องเรียน Coding? หาคำตอบว่าทำไมโค้ดดิ้งคือพื้นฐานสำคัญแห่งอนาคต พร้อมส่องโปรเจกต์ AI ระดับโลกของนักเรียนที่ CO-DE Academy",
    keywords: [
      "Scratch เด็ก",
      "เรียน coding เด็ก",
      "สอนสร้างเกมเด็ก",
      "CO-DE academy",
    ],
  };
}

export default function ScratchPage({ params }) {
  const lang = params;
  const dict = getDictionary(lang);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dict?.Blogs_Tech_1 || "AI คืออะไร และทำไมเด็กไทยต้องรู้ในศตวรรษที่ 21",
    // image: [
    //   "https://www.co-deacademy.com/images/blog-python.jpg", // รูปหน้าปกบทความ
    // ],
    datePublished: "2026-07-01T08:00:00+07:00",
    author: {
      "@type": "Organization",
      name: "CO-DE academy",
      url: "https://www.co-deacademy.com",
    },
  };
  return (
    <>
      <WhatIsAI />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
