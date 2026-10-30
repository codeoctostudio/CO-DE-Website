import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp"; // npm i sharp
import { getBlog, getBlogText, isPublic, safeImageUrl } from "@/lib/blogs";

export const alt = "Co-de Academy Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MAX_COVER_BYTES = 5 * 1024 * 1024;

// Satori ไม่มีฟอนต์ไทยในตัว ต้องโหลดเอง (.ttf / .otf / .woff — ไม่รองรับ woff2)
// ดาวน์โหลด Noto Sans Thai (static Bold) ไว้ที่ assets/fonts/NotoSansThai-Bold.ttf
const loadFont = () =>
  readFile(path.join(process.cwd(), "assets/fonts/NotoSansThai-Bold.ttf"));

// ดึงรูปปกแล้วแปลงเป็น JPEG 1200x630 (รองรับ webp/gif/png ที่ผู้ใช้อัปโหลด) เป็น data URI
async function loadCover(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;

    const len = Number(res.headers.get("content-length") || 0);
    if (len > MAX_COVER_BYTES) return null;

    const input = Buffer.from(await res.arrayBuffer());
    if (input.length > MAX_COVER_BYTES) return null;

    const jpeg = await sharp(input)
      .resize(1200, 630, { fit: "cover" })
      .jpeg({ quality: 80 })
      .toBuffer();

    return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
  } catch {
    return null;
  }
}

function truncate(text, max) {
  const t = String(text || "").trim();
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}

export default async function Image({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  // บทความไม่มี / ยัง pending → ใช้ภาพแบรนด์กลาง ไม่เปิดเผยชื่อบทความที่ยังไม่อนุมัติ
  const publicBlog = blog && isPublic(blog) ? blog : null;

  const title = publicBlog
    ? truncate(getBlogText(publicBlog).title, 90)
    : "Co-de Academy";

  const coverUrl = publicBlog ? safeImageUrl(publicBlog.image_url) : null;
  const [font, cover] = await Promise.all([
    loadFont(),
    coverUrl ? loadCover(coverUrl) : null,
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        fontFamily: "Noto Sans Thai",
      }}
    >
      {cover && (
        <img
          src={cover}
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}

      {cover && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 70%)",
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#93c5fd" }}>
          Co-de Academy
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: title.length > 60 ? 46 : 58,
            lineHeight: 1.35,
            color: "#ffffff",
          }}
        >
          {title}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Noto Sans Thai", data: font, weight: 700, style: "normal" },
      ],
    },
  );
}
