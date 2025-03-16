import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;

  // return NextResponse.redirect(new URL("/", request.url));
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/hello", request.nextUrl));
  // }
}

// export const config = {
//   matcher: "/profile",
// };
