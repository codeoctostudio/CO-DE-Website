// app/api/blogs/route.js (หรือ pages/api/blogs.js)
import { NextResponse } from "next/server";

const PHP_API_URL = "https://admin.co-deacademy.com/api/blogs.php";

// Helper สำหรับดึง Cookie ส่งต่อไปยัง PHP API เพื่อรักษา Login Session
const getForwardHeaders = (request) => {
  const cookieHeader = request.headers.get("cookie") || "";
  return {
    "Content-Type": "application/json",
    Cookie: cookieHeader,
  };
};

// ----------------------------------------------------
// GET: ดึงข้อมูลบทความจาก PHP API
// ----------------------------------------------------
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const endpoint = slug ? `${PHP_API_URL}?slug=${slug}` : PHP_API_URL;
    const res = await fetch(endpoint, {
      method: "GET",
      headers: getForwardHeaders(request),
      cache: "no-store",
      credentials: "include",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "ไม่สามารถเชื่อมต่อระบบฐานข้อมูลได้" },
      { status: 500 },
    );
  }
}

// ----------------------------------------------------
// POST: สร้างบทความใหม่
// ----------------------------------------------------
export async function POST(request) {
  try {
    const body = await request.json();

    const res = await fetch(PHP_API_URL, {
      method: "POST",
      headers: getForwardHeaders(request),
      body: JSON.stringify(body),
      credentials: "include",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "เกิดข้อผิดพลาดในการสร้างบทความ" },
      { status: 500 },
    );
  }
}

// ----------------------------------------------------
// PUT: แก้ไขบทความเดิม
// ----------------------------------------------------
export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const originalSlug = searchParams.get("slug");
    const body = await request.json();

    const res = await fetch(PHP_API_URL, {
      method: "PUT",
      headers: getForwardHeaders(request),
      body: JSON.stringify({
        ...body,
        originalSlug: originalSlug, // ส่ง originalSlug ไปให้ PHP กรณีเปลี่ยน Slug ใหม่
      }),
      credentials: "include",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "เกิดข้อผิดพลาดในการอัปเดตบทความ" },
      { status: 500 },
    );
  }
}

// ----------------------------------------------------
// DELETE: ลบบทความ
// ----------------------------------------------------
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { ok: false, error: "กรุณาระบุ slug" },
        { status: 400 },
      );
    }

    const res = await fetch(`${PHP_API_URL}?slug=${slug}`, {
      method: "DELETE",
      headers: getForwardHeaders(request),
      credentials: "include",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "เกิดข้อผิดพลาดในการลบบทความ" },
      { status: 500 },
    );
  }
}
