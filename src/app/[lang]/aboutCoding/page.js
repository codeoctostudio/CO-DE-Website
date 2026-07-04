import AboutCoding from "@/component/AboutCoding/AboutCoding";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentLang = lang || "th";

  return {
    title: dict?.AboutCoding_Page || "CO-DE academy",
    description:
      dict?.Des_AboutCoding_Page ||
      "ทำไมเด็กยุคนี้ต้องเรียน Coding? ร่วมหาคำตอบกับ CO-DE Academy ว่าการเขียนโปรแกรมช่วยพัฒนาความคิดเชิงตรรกะ จินตนาการ และเตรียมลูกให้พร้อมสู่ยุคดิจิทัลอย่างไร Read more",
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
      canonical: `https://www.co-deacademy.com/${currentLang}/aboutCoding`,
      languages: {
        th: "https://www.co-deacademy.com/th/aboutCoding",
        en: "https://www.co-deacademy.com/en/aboutCoding",
      },
    },

    openGraph: {
      url: `https://www.co-deacademy.com/${currentLang}/aboutCoding`,
    },
  };
}

export default function AboutCodingPage() {
  return <AboutCoding />;
}
