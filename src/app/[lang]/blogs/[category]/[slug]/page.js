import { cache } from "react";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import BlogDetailContent from "./BlogDetailContent";

const SITE = "https://www.co-deacademy.com";
const DEFAULT_OG = `${SITE}/images/og/default.jpg`;

const str = (v) => (typeof v === "string" ? v : "");

const getBlogBySlug = cache(async (slug) => {
  try {
    const res = await fetch(
      `https://admin.co-deacademy.com/api/blogs.php?slug=${encodeURIComponent(slug)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      },
    );
    if (!res.ok) return null;

    const data = await res.json();
    if (!data.ok || !data.blog) return null;

    const status = String(data.blog.status || "pending").toLowerCase();
    if (status !== "approved") return null;

    return data.blog;
  } catch (error) {
    console.error("Fetch Blog Detail Error:", error);
    return null;
  }
});

export async function generateMetadata({ params }) {
  try {
    const { lang, slug } = await params;
    const blog = await getBlogBySlug(slug);
    if (!blog) return {};

    const l = lang === "en" ? "en" : "th";
    const c =
      (blog[l] && typeof blog[l] === "object" ? blog[l] : blog.th) || {};

    const title = str(c.introTitle) || str(c.ctaTitle) || "CO-DE Academy";
    const description =
      str(c.metaDescription) ||
      str(c.introDesc) ||
      str(c.introSubtitle) ||
      str(c.ctaDesc);

    const raw =
      str(blog.og_image) ||
      (blog.media_type !== "video" ? str(blog.image_url) : "");
    const image = /^https?:\/\//.test(raw) ? raw : DEFAULT_OG;

    const url = `${SITE}/${lang}/blogs/${blog.category_type}/${blog.slug}`;

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title,
        description,
        siteName: "CO-DE Academy",
        images: [{ url: image, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (e) {
    console.error("generateMetadata error:", e);
    return {}; // ให้หน้าเว็บยังเปิดได้แม้ metadata พลาด
  }
}

export default async function DynamicBlogPage({ params }) {
  const { lang, slug } = await params;
  const blogData = await getBlogBySlug(slug);
  if (!blogData) notFound();

  const dict = await getDictionary(lang);
  return <BlogDetailContent lang={lang} dict={dict} blogData={blogData} />;
}
