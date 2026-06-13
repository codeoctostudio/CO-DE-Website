import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return {
    title: dict?.Home_Page || "CO-DE academy",
    description:
      "สถาบันสอน Coding สำหรับเด็กอายุ 4-15 ปี เปลี่ยนความชอบเล่นเกมให้เป็นทักษะอนาคต เรียนสนุก เข้าใจง่าย ปูพื้นฐานตั้งแต่ Block Code (Scratch, Roblox) ไปจนถึง Text Code (Python, Java) พร้อมเสริมสร้างกระบวนการคิดอย่างเป็นระบบและความคิดสร้างสรรค์",
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
  };
}

export default function UnityPage() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        title="Unity WebGL"
        src="/UnityTest/index.html"
        style={{ border: "none", width: "100%", height: "100%" }}
        allow="fullscreen; autoplay; xr-spatial-tracking; clipboard-read; clipboard-write"
      />
    </div>
  );
}
