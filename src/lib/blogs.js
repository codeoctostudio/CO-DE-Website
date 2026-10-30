import { cache } from "react";

const API_URL =
  process.env.BLOGS_API_URL || "https://admin.co-deacademy.com/api/blogs.php";

// รับเฉพาะรูปที่อัปโหลดผ่าน blogs.php เท่านั้น (กัน SSRF / hotlink จาก imageUrl ที่ใครก็ใส่ได้)
const ALLOWED_IMAGE_PREFIX = "https://admin.co-deacademy.com/api/Blogs_Image/";

/**
 * ดึงบทความ 1 รายการจาก PHP API
 * cache() = dedupe ภายใน request เดียว (generateMetadata + page + opengraph-image ใช้ร่วมกัน)
 * revalidate = ข้อมูลสดภายใน 5 นาที (หรือใช้ revalidateTag ตอนแก้บทความ)
 */
export const getBlog = cache(async (slug) => {
  try {
    const res = await fetch(`${API_URL}?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 300, tags: [`blog:${slug}`] },
    });
    if (!res.ok) return null;

    const json = await res.json();
    return json?.ok && json.blog ? json.blog : null;
  } catch {
    return null;
  }
});

// แสดงต่อสาธารณะเฉพาะ approved
export const isPublic = (blog) => blog?.status === "approved";

export function safeImageUrl(url) {
  return typeof url === "string" && url.startsWith(ALLOWED_IMAGE_PREFIX)
    ? url
    : null;
}

// TODO: ปรับ key ให้ตรงกับโครงสร้าง JSON ของคอลัมน์ th / en ในตาราง Blogs
export function getBlogText(blog, locale = "th") {
  const primary = blog?.[locale] ?? {};
  const fallback = blog?.[locale === "th" ? "en" : "th"] ?? {};

  return {
    title: primary.title || fallback.title || "Co-de Academy",
    description:
      primary.description || fallback.description || primary.excerpt || "",
  };
}
