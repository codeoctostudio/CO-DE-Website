import OurPlayground from "@/component/playground/OurPlayground";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentLang = lang || "th";

  return {
    title: dict?.Playground_Page || "CO-DE academy",
    description:
      dict?.Des_Playground_Page || "แนะนำสถานที่เรียน Coding สำหรับเด็กที่ CO-DE Academy กรุงเทพ พื้นที่สร้างสรรค์ดีไซน์ล้ำที่ช่วยจุดประกายจินตนาการและการเรียนรู้แบบลงมือทำ (Project-based) ของลูกคุณ ",
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
      canonical: `https://www.co-deacademy.com/${currentLang}/playground`,
      languages: {
        th: "https://www.co-deacademy.com/th/playground",
        en: "https://www.co-deacademy.com/en/playground",
      },
    },

    openGraph: {
      url: `https://www.co-deacademy.com/${currentLang}/playground`,
    },
  };
}

export default function OurPlaygroundPage() {
  return <OurPlayground />;
}
