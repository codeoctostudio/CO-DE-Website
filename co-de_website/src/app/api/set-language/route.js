import { NextResponse } from "next/server";

export async function POST(request) {
  const { lang } = await request.json();

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("lang", lang, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return response;
}