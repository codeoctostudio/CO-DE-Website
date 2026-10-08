import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import BlogDetailContent from "./BlogDetailContent";

// ฟังก์ชันดึงข้อมูลบทความตาม Slug จาก Database ผ่าน PHP API
async function getBlogBySlug(slug) {
  try {
    const res = await fetch(
      `https://admin.co-deacademy.com/api/blogs.php?slug=${encodeURIComponent(slug)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) return null;

    const data = await res.json();

    if (!data.ok || !data.blog) {
      return null;
    }

    // ไม่อนุญาตให้ Blog ที่ pending แสดงบนหน้า Public
    const status = String(data.blog.status || "pending").toLowerCase();

    if (status !== "approved") {
      return null;
    }

    return data.blog;
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

  return <BlogDetailContent lang={lang} dict={dict} blogData={blogData} />;
}
