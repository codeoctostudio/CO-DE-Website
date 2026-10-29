import { notFound } from "next/navigation";
import { cache } from "react";
import { getDictionary } from "@/lib/dictionary";
import BlogDetailContent from "./BlogDetailContent";

const SITE = "https://www.co-deacademy.com";
const DEFAULT_OG = `${SITE}/images/og/default.jpg`;

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

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};

  const l = lang === "en" ? "en" : "th";
  const c =
    blog[l] && Object.keys(blog[l]).length ? blog[l] : blog.th || blog.en || {};

  const title = c.introTitle || c.ctaTitle || "CO-DE Academy";
  const description =
    c.metaDescription || c.introDesc || c.introSubtitle || c.ctaDesc || "";

  // เลือกรูปแชร์: og_image (ถ้าเพิ่มคอลัมน์ ดูข้อ 2) -> image_url -> default
  const raw =
    blog.og_image || (blog.media_type !== "video" && blog.image_url) || "";
  const image = /^https?:\/\//.test(raw) ? raw : DEFAULT_OG;

  const url = `${SITE}/${lang}/blogs/${blog.category_type}/${blog.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        th: `${SITE}/th/blogs/${blog.category_type}/${blog.slug}`,
        en: `${SITE}/en/blogs/${blog.category_type}/${blog.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "CO-DE Academy",
      locale: l === "en" ? "en_US" : "th_TH",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
