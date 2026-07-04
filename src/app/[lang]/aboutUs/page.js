import AboutUs from "@/component/aboutUs/AboutUs";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentLang = lang || "th";

  return {
    title: dict?.AboutUs_Page || "CO-DE academy",
    description:
      dict?.Des_AboutUs_Page ||
      "สถาบัน CO-DE Academy สอน Coding เด็กโดยทีมวิศวกรซอฟต์แวร์และครูผู้เชี่ยวชาญ ที่เข้าใจเด็ก สอนสนุก ปูพื้นฐานแน่น และมีระบบทบทวนออนไลน์ได้ตลอดเวลา Read more",
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
      canonical: `https://www.co-deacademy.com/${currentLang}/aboutUs`,
      languages: {
        th: "https://www.co-deacademy.com/th/aboutUs",
        en: "https://www.co-deacademy.com/en/aboutUs",
      },
    },

    openGraph: {
      url: `https://www.co-deacademy.com/${currentLang}/aboutUs`,
    },
  };
}

export default function AboutUsPage() {
  return <AboutUs />;
}
