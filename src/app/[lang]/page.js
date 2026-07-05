import Homepage from "@/component/homepage/Homepage";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict?.Home_Page || "CO-DE academy",
    description:
      dict?.Des_Home_Page || "โรงเรียนสอน coding สำหรับเด็กในกรุงเทพ เรียนแบบ Project-based สอนโดยครูจบด้าน Computer Science ตั้งแต่ 4 ปีถึงเตรียมเข้ามหาวิทยาลัย ทั้ง Online และ Onsite ",
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
    verification: {
      google: "LecxZbw-BwF9XePC8i8F7rZcFZzwsPT5DTi0jcJdwyc",
    },
  };
}

export default function Home() {
  return <Homepage />;
}
