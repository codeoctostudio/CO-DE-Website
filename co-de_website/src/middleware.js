import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname === "/" || pathname === "") {
    const savedLang = request.cookies.get("lang")?.value;
    const locale = savedLang || "th";

    return NextResponse.redirect(
      new URL(`/${locale}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
  ],
};