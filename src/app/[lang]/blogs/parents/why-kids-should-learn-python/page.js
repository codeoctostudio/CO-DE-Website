import Advice from "@/component/Trends/Advice";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${dict?.Blog_python || "ทำไมเด็กๆ ควรเรียน Python?"} | CO-DE academy`,
    description:
      "เจาะลึกเหตุผลสำคัญที่ทำไมภาษา Python ถึงเป็นภาษาเขียนโค้ดรูปแบบตัวอักษร (Text-Based) ที่ดีที่สุดและเหมาะสมที่สุดสำหรับเด็กอายุ 9 ปีขึ้นไป ... Read more",
    keywords: [
      "Python เด็ก",
      "เรียน python",
      "สอนคอมพิวเตอร์เด็ก",
      "CO-DE academy",
    ],
  };
}

export default function AdvicePage({ params }) {
  const lang = params;
  const dict = getDictionary(lang);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      dict?.Blog_python || "ทำไมเด็กๆ ควรเรียน Python? คำตอบที่พ่อแม่ต้องรู้",
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
      <Advice />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
