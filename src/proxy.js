import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "") {
    const savedLang = request.cookies.get("lang")?.value;
    const locale = savedLang || "th";

    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  if (pathname.startsWith("/api-backend/")) {
    const backendUrl = request.nextUrl.clone();
    backendUrl.href = `https://co-deacademy.com/api/${pathname.replace("/api-backend/", "")}`;

    return NextResponse.rewrite(backendUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/api-backend/:path*"],
};
