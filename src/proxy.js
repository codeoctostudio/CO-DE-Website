import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. จัดการ Redirect ภาษาหน้าแรก
  if (pathname === "/" || pathname === "") {
    const savedLang = request.cookies.get("lang")?.value;
    const locale = savedLang || "th";

    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // 2. จัดการ Proxy หลบ CORS สำหรับ API Backend
  if (pathname.startsWith("/api-backend/")) {
    const targetPath = pathname.replace("/api-backend/", "");
    const backendUrl = new URL(`https://co-deacademy.com/api/${targetPath}`);

    // คัดลอก search parameters (ถ้ามี เช่น ?id=1) ไปด้วย
    backendUrl.search = request.nextUrl.search;

    return NextResponse.rewrite(backendUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/api-backend/:path*"],
};
