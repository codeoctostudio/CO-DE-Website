import { revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";

// PHP เรียก POST มาที่นี่หลังบันทึก/อนุมัติ/ลบบทความ เพื่อล้าง cache ของ slug นั้น
// header: x-revalidate-secret ต้องตรงกับ REVALIDATE_SECRET

function safeEqual(a, b) {
  const ab = Buffer.from(a || "");
  const bb = Buffer.from(b || "");
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export async function POST(request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (
    !secret ||
    !safeEqual(request.headers.get("x-revalidate-secret"), secret)
  ) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const { slug } = await request.json().catch(() => ({}));
  if (typeof slug !== "string" || !slug) {
    return Response.json(
      { ok: false, error: "slug required" },
      { status: 400 },
    );
  }

  // Next 16: revalidateTag ต้องส่ง profile เป็นอาร์กิวเมนต์ที่ 2 ('max' = stale-while-revalidate)
  revalidateTag(`blog:${slug}`, "max");

  return Response.json({ ok: true, slug });
}
