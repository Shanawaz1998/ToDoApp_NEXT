import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Inside Middleware");
  const authToken = request.cookies.get("authToken")?.value;
  console.log("request", request.nextUrl.pathname);
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/user"
  ) {
    return;
  }
  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signUp"
  ) {
    if (authToken) {
      console.log("Under condition");
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied !!",
            success: false,
          },
          {
            status: 401,
          }
        );
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// middleware function gets executed for the url whose url matches in the config function
export const config = {
  matcher: [
    // "/",
    "/login",
    "/signUp",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ], //Here path is the keyword which refer to any word coming further
};
