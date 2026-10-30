import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp"; // npm i sharp

// ตำแหน่งไฟล์: app/og-default.png/route.js  →  URL: /og-default.png
// อ่าน public/og-image.webp แล้วแปลงเป็น PNG 1200x630 ให้แพลตฟอร์มที่ไม่แสดง webp (เช่น LINE ตามที่ทดสอบ)
// force-static = สร้างครั้งเดียวตอน build ไม่ต้องแปลงซ้ำทุกคำขอ
export const dynamic = "force-static";

export async function GET() {
  const input = await readFile(
    path.join(process.cwd(), "public/og-image.webp"),
  );

  const png = await sharp(input)
    .resize(1200, 630, {
      fit: "contain", // ไม่ครอป โลโก้ไม่ถูกตัด
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .flatten({ background: "#ffffff" })
    .png()
    .toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
