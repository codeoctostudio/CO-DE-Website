import Trends from "@/component/Trends/Blogs";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict?.Blogs_Page || "CO-DE academy",
    description:
      "สถาบันสอน Coding สำหรับเด็กอายุ 4-15 ปี เปลี่ยนความชอบเล่นเกมให้เป็นทักษะอนาคต เรียนสนุก เข้าใจง่าย ปูพื้นฐานตั้งแต่ Block Code (Scratch, Roblox) ไปจนถึง Text Code (Python, Java) พร้อมเสริมสร้างกระบวนการคิดอย่างเป็นระบบและความคิดสร้างสรรค์",
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
