import ContactUs from "@/component/contactUs/Contact";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentLang = lang || "th";

  return {
    title: dict?.ContactUs_Page || "CO-DE academy",
    description:
      dict?.Des_ContactUs_Page ||
      "สนใจให้ลูกเรียน Coding? ติดต่อ CO-DE Academy โทร 0808300899 หรือ LINE: @co-de ทักสอบถามคอร์สเรียน วางแผนการเรียน และรับสิทธิ์ทดลองเรียนฟรี! Read more",
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
      canonical: `https://www.co-deacademy.com/${currentLang}/contactUs`,
      languages: {
        th: "https://www.co-deacademy.com/th/contactUs",
        en: "https://www.co-deacademy.com/en/contactUs",
      },
    },

    openGraph: {
      url: `https://www.co-deacademy.com/${currentLang}/contactUs`,
    },
  };
}

export default function ContactUsPage() {
  return <ContactUs />;
}