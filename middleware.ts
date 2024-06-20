import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  if (!request.auth && request.nextUrl.pathname !== "/login") {
    // ... 
    return NextResponse.redirect(new URL("/login", request.url));
  }
});

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};