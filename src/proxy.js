import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.includes(".") && !pathname.startsWith("/api-backend/")) {
    return NextResponse.next();
  }

  if (pathname === "/" || pathname === "") {
    const savedLang = request.cookies.get("lang")?.value;
    const locale = savedLang || "th";

    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  if (pathname.startsWith("/api-backend/")) {
    const targetPath = pathname.replace("/api-backend/", "");
    const backendUrl = new URL(`https://admin.co-deacademy.com/api/${targetPath}`);
    backendUrl.search = request.nextUrl.search;

    return NextResponse.rewrite(backendUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/api-backend/:path*",
  ],
};
