import { cache } from "react";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import BlogDetailContent from "./BlogDetailContent";

const SITE = "https://www.co-deacademy.com";
// ภาพ default (โลโก้ CO-DE) ต้นฉบับ = public/og-image.webp
// แต่ LINE ไม่แสดง webp จึงให้ route /og-default.png (app/og-default.png/route.js)
// แปลงเป็น PNG 1200x630 ให้ แล้วใช้ URL นี้เป็น og:image
const DEFAULT_OG = `${SITE}/og-default.png`;

const str = (v) => (typeof v === "string" ? v : "");

// [OG] รับเฉพาะรูปจากแหล่งที่เราควบคุมเอง (รูปที่อัปโหลดผ่าน blogs.php และรูปในเว็บ)
// ถ้า og_image ของคุณมาจากที่อื่นด้วย ให้เพิ่ม prefix ที่นี่
const ALLOWED_IMAGE_PREFIXES = [
  "https://admin.co-deacademy.com/api/Blogs_Image/",
  `${SITE}/`,
];
const isAllowedImage = (u) =>
  ALLOWED_IMAGE_PREFIXES.some((p) => u.startsWith(p));

// [OG] เช็กว่าไฟล์รูปมีอยู่จริง (ไฟล์ถูกลบ/ชื่อผิด → ใช้ภาพ default แทน)
// ถือว่า "ไม่มี" เฉพาะกรณีชัดเจนเท่านั้น: 404/410 หรือได้เนื้อหาที่ไม่ใช่รูปกลับมา
// กรณีอื่น (403, 405, 5xx, timeout, เครือข่ายล่ม) ให้เชื่อ URL ไปก่อน
// เพราะเซิร์ฟเวอร์/WAF บางตัวบล็อกคำขอ HEAD หรือบอท ทั้งที่ไฟล์มีอยู่จริง
// ใช้ GET + Range 1 ไบต์ แทน HEAD เพื่อให้เข้ากับเซิร์ฟเวอร์ได้กว้างกว่า
const imageExists = cache(async (url) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    res.body?.cancel();

    if (res.status === 404 || res.status === 410) return false;

    const type = res.headers.get("content-type");
    if (res.ok && type && !type.startsWith("image/")) return false;

    return true;
  } catch {
    return true;
  }
});

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

    // [OG] ลำดับ: og_image → image_url (ถ้าไม่ใช่วิดีโอ) → ภาพ default
    // ตรวจทีละตัว เพื่อให้ตัวที่ใช้ไม่ได้ไม่บังตัวถัดไป
    const candidates = [
      str(blog.og_image),
      blog.media_type !== "video" ? str(blog.image_url) : "",
    ];
    let image = DEFAULT_OG;
    for (const u of candidates) {
      if (!u) continue;
      if (!isAllowedImage(u)) {
        console.warn("[OG] รูปไม่ผ่านการตรวจแหล่งที่มา:", u);
        continue;
      }
      if (!(await imageExists(u))) {
        console.warn("[OG] ไม่พบไฟล์รูป:", u);
        continue;
      }
      image = u;
      break;
    }
    if (image === DEFAULT_OG) {
      console.warn("[OG] ใช้ภาพ default ให้ slug:", slug);
    }

    // [OG] ใช้ l (th/en ที่ตรวจแล้ว) และ encode ค่าที่มาจากผู้ใช้
    const url = `${SITE}/${l}/blogs/${encodeURIComponent(
      blog.category_type,
    )}/${encodeURIComponent(blog.slug)}`;

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
        // [OG] ระบุ width/height เฉพาะภาพ default ที่รู้ขนาดแน่ ๆ
        // รูปที่ผู้ใช้อัปโหลดขนาดไม่แน่นอน การระบุผิดทำให้ครอปเพี้ยน
        images: [
          image === DEFAULT_OG
            ? { url: image, width: 1200, height: 630, alt: title }
            : { url: image, alt: title },
        ],
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
