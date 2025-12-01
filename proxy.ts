import { NextResponse } from "next/server";

/**
 * Middleware (proxy.ts)
 *
 * Add your proxy logic here when needed.
 *
 * Example: Basic authentication check
 *
 * import type { NextRequest } from "next/server";
 *
 * export async function proxy(request: NextRequest) {
 *   const session = request.cookies.get("session");
 *   const { pathname } = request.nextUrl;
 *
 *   const isProtectedRoute = pathname.startsWith("/dashboard");
 *
 *   if (isProtectedRoute && !session) {
 *     return NextResponse.redirect(new URL("/sign-in", request.url));
 *   }
 *
 *   return NextResponse.next();
 * }
 */

export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
