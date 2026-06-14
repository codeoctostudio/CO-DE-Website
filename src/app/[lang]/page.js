import Homepage from "@/component/homepage/Homepage";
import { getDictionary } from "@/lib/dictionary";

const LOGO_URL = "https://co-dewebsite.vercel.app/icon.png";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const isEn = lang === "en";

  return {
    title: dict?.Home_Page || "CO-DE academy",
    description:
      "สถาบันสอน Coding สำหรับเด็กอายุ 4-15 ปี เปลี่ยนความชอบเล่นเกมให้เป็นทักษะอนาคต...",
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
      canonical: `https://co-dewebsite.vercel.app/${lang}`,
      languages: {
        th: "https://co-dewebsite.vercel.app/th",
        en: "https://co-dewebsite.vercel.app/en",
      },
    },
    openGraph: {
      title: dict?.Home_Page || "CO-DE Academy",
      description: isEn
        ? "Coding for kids aged 4-15"
        : "สถาบันสอน Coding สำหรับเด็กอายุ 4-15 ปี",
      url: `https://co-dewebsite.vercel.app/${lang}`,
      siteName: "CO-DE Academy",
      images: [
        {
          url: LOGO_URL, // ✅ string ตรงๆ
          width: 1200,
          height: 630,
          alt: "CO-DE Academy - สอน Coding สำหรับเด็ก",
        },
      ],
      locale: isEn ? "en_US" : "th_TH",
      type: "website",
    },
  };
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CO-DE Academy",
    url: "https://co-dewebsite.vercel.app/th",
    description: "สถาบันสอน Coding สำหรับเด็กอายุ 4-15 ปี",
    logo: LOGO_URL, // ✅ string ตรงๆ
    sameAs: [
      "https://www.facebook.com/codeacademy.thailand/",
      "https://www.instagram.com/co_de_academy/",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Homepage />
    </>
  );
}
