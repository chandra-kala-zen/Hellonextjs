import { NextResponse, type NextRequest } from "next/server";

export function middleware(request:NextRequest){
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    if(!themePreference){
        response.cookies.set("theme","dark");
    }
    return response;
}