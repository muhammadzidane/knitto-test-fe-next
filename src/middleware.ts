import { withAuth } from "next-auth/middleware";
import { type NextRequest, NextResponse } from "next/server";

export default withAuth(function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.rewrite(new URL("/home", request.url));
  }

  return NextResponse.next();
});

export const config = { matcher: ["/", "/home"] };
