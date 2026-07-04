import Trends from "@/component/Trends/Blogs";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentLang = lang || "th";

  return {
    title: dict?.Blogs_Page || "CO-DE academy",
    description:
      dict?.Des_Blogs_Page ||"คลังคู่มือเรียน Coding สำหรับเด็ก อัปเดตเทรนด์เทค และเทคนิคสไตล์เจาะลึกที่พ่อแม่ต้องรู้ ชวนส่องผลงานและจุดประกายจินตนาการลูกคุณไปกับ CO-DE Academy Read more",
    keywords: [
      "coding เด็ก",
      "เรียน coding เด็ก",
      "สอนคอมพิวเตอร์เด็ก",
      "Scratch เด็ก",
      "Python เด็ก",
      "เรียน Roblox",
      "พัฒนาการเด็ก 4 ขวบ",
      "ทักษะแห่งอนาคต",
      "CO-DE academy",
    ],
    alternates: {
      canonical: `https://www.co-deacademy.com/${currentLang}/blogs`,
      languages: {
        th: "https://www.co-deacademy.com/th/blogs",
        en: "https://www.co-deacademy.com/en/blogs",
      },
    },

    openGraph: {
      url: `https://www.co-deacademy.com/${currentLang}/blogs`,
    },
  };
}

export default function BlogsPage({ params }) {
  const lang = params;
  const dict = getDictionary(lang);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: dict?.faq_parent_2 || "เด็กอายุ 4 ขวบ เรียน Coding ได้ไหม?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            dict?.faq_parent_3 ||
            "CO-DE Academy รับเด็กตั้งแต่ปี 4 ขวบขึ้นไป โดยเริ่มจาก Design Thinking เพื่อฝึกทักษะการคิดเชิงตรรกะก่อน",
        },
      },
      {
        "@type": "Question",
        name:
          dict?.faq_parent_4 ||
          "Scratch กับ Python ต่างกันอย่างไร เลือกอะไรดี?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            dict?.faq_parent_5 ||
            "Scratch เหมาะกับเด็กอายุ 6+ ปี ใช้ Block-Based Coding ส่วน Python เหมาะกับเด็กอายุ 9 ปีขึ้นไปที่พร้อมเรียนแบบ Text-Based",
        },
      },
      {
        "@type": "Question",
        name: dict?.faq_parent_6 || "เรียน Coding แล้วลูกได้อะไร?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            dict?.faq_parent_7 ||
            "นอกจาก Coding Skill แล้ว ลูกจะได้ฝึก Problem-solving, Logical Thinking และ Creativity ซึ่งเป็นทักษะสำคัญในศตวรรษที่ 21",
        },
      },
    ],
  };
  return (
    <>
      <Trends />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
