import Scratch from "@/component/Trends/Scratch";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${dict?.Blog_scratch || "เริ่มเรียน Scratch ยังไงให้สนุก"} | CO-DE academy`,
    description:
      "คู่มือเริ่มต้นสำหรับเด็ก ๆ และผู้ปกครอง เรียนรู้วิธีการสร้างเกมและแอนิเมชันด้วยตัวเองผ่านโปรแกรม Scratch บล็อกโค้ดที่เข้าใจง่ายที่สุด ... Read more",
    keywords: [
      "Scratch เด็ก",
      "เรียน coding เด็ก",
      "สอนสร้างเกมเด็ก",
      "CO-DE academy",
    ],
  };
}

export default function ScratchPage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dict?.Blogs_Scratch || "เริ่มเรียน Scratch ยังไงให้สนุก",
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
      <Scratch />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
