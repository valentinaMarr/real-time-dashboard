import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hasName = request.cookies.get("userName");
  const origin = request.nextUrl.origin;
  const pathname = request.nextUrl.pathname;

  if (!hasName) {
    return NextResponse.redirect(`${origin}/intro`);
  } else if (hasName && pathname == "/intro") {
    return NextResponse.redirect(`${origin}/`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
