import Parents from "@/component/Trends/Parents";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${dict?.Blog_Parent_1 || "บทความสำหรับผู้ปกครอง"} | CO-DE academy`,
    description:
      "รวมบทความและคำแนะนำดีๆ สำหรับคุณพ่อคุณแม่ในการส่งเสริมทักษะ Coding และกระบวนการคิดอย่างเป็นระบบให้สมวัยสำหรับลูกรัก ... Read more",
    keywords: [
      "coding เด็ก",
      "เรียน coding เด็ก",
      "วิธีเลือกโรงเรียนคอมพิวเตอร์",
      "CO-DE academy",
    ],
  };
}

export default function BlogPage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      dict?.Blog_Parent_1 ||
      "5 สิ่งที่ต้องเช็กก่อนให้ลูกเรียน Coding เลือกผิดเสียดายทั้งเงินและเวลา",
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
      <Parents />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
