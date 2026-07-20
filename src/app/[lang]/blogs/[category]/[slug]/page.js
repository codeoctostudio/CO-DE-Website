// เพิ่มบรรทัดนี้ไว้ด้านบนสุดของไฟล์
import { notFound } from "next/navigation"; 
import fs from "fs";
import path from "path";
import { getDictionary } from "@/lib/dictionary";
import BlogDetailContent from "./BlogDetailContent";

// ... โค้ดส่วนอื่นๆ ของคุณ ...

// ฟังก์ชันอ่านข้อมูลจาก JSON ที่เราเขียนขึ้นใหม่
function getBlogBySlug(slug) {
  try {
    const filePath = path.join(process.cwd(), "data", "blogs.json");
    if (!fs.existsSync(filePath)) return null;
    
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const db = JSON.parse(fileContent || "{}");
    return db[slug] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function DynamicBlogPage({ params }) {
  const { lang, slug } = await params;
  
  // เรียกข้อมูลบทความแบบ Dynamic จากฐานข้อมูล JSON ท้องถิ่น
  const blogData = getBlogBySlug(slug);

  if (!blogData) {
    notFound(); // ถ้าไม่มี Slug นี้ในระบบ ให้ขึ้น 404
  }

  const dict = await getDictionary(lang);

  return (
    <BlogDetailContent lang={lang} dict={dict} blogData={blogData} />
  );
}