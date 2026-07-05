import Course from "@/component/courses/Course";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentLang = lang || "th";

  return {
    title: dict?.Course_Page || "CO-DE academy",
    description:
      dict?.Des_Course_Page ||
      "วางแผนการเรียน Coding ให้ลูกตามช่วงอายุ 4 ปี-มหาวิทยาลัย ครอบคลุม Scratch, Python, วิทยาการคำนวณ, Roblox และเตรียมเข้า Computer Science ที่ CO-DE Academy ทั้งออนไลน์และในกรุงเทพ ",
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
      canonical: `https://www.co-deacademy.com/${currentLang}/courses`,
      languages: {
        th: "https://www.co-deacademy.com/th/courses",
        en: "https://www.co-deacademy.com/en/courses",
      },
    },

    openGraph: {
      url: `https://www.co-deacademy.com/${currentLang}/courses`,
    },
  };
}

export default function CoursesPage() {
  return <Course />;
}
