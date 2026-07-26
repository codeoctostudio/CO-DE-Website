import { notFound } from "next/navigation"; 
import { getDictionary } from "@/lib/dictionary";
import BlogDetailContent from "./BlogDetailContent";

// ฟังก์ชันดึงข้อมูลบทความตาม Slug จาก Database ผ่าน PHP API
async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`https://admin.co-deacademy.com/api/blogs.php?slug=${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // แนะนำใช้ cache: "no-store" เพื่อให้ได้ข้อมูลล่าสุดจาก Database เสมอ
      // หรือ revalidate ตามความเหมาะสม เช่น { next: { revalidate: 60 } }
      cache: "no-store", 
    });

    if (!res.ok) return null;

    const data = await res.json();
    
    // PHP API จะคืนค่ารูปแบบ { ok: true, blog: {...} }
    return data.ok ? data.blog : null;
  } catch (error) {
    console.error("Fetch Blog Detail Error:", error);
    return null;
  }
}

export default async function DynamicBlogPage({ params }) {
  const { lang, slug } = await params;
  
  // ดึงข้อมูลบทความจาก Database ผ่าน PHP API
  const blogData = await getBlogBySlug(slug);

  if (!blogData) {
    notFound(); // ถ้าไม่พบข้อมูลใน DB ให้แสดงหน้า 404
  }

  const dict = await getDictionary(lang);

  return (
    <BlogDetailContent lang={lang} dict={dict} blogData={blogData} />
  );
}