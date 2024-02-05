import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const authToken = await request.cookies.get("authToken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users" ||
    request.nextUrl.pathname === "/api/user" ||
    request.nextUrl.pathname === "/api/current" ||
    request.nextUrl.pathname === "/api/adminLogin"
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname == "/signUp";

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  }
  //If add-task or show-task selected
  else {
    console.log("Inside add-task", authToken);
    if (!request.cookies.get("authToken")?.value) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        console.log("Inside url");
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
  // if (loggedInUserNotAccessPaths) {
  //   console.log("Inside Login/signUp");
  //   if (authToken) {
  //     return NextResponse.redirect(new URL("/profile/user", request.url));
  //   }
  // } else {
  //   if (!authToken) {
  //     console.log("Auth token not present");
  //     if (request.nextUrl.pathname.startsWith("/api")) {
  //       console.log("Inside url");
  //       return NextResponse.json(
  //         {
  //           message: "Access Denied !!",
  //           success: false,
  //         },
  //         {
  //           status: 401,
  //         }
  //       );
  //     }
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  // }
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
