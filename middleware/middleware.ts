import { NextRequest, NextResponse } from "next/server";

let reqCount = 0;
export function middleware(req : NextRequest) {
    reqCount++;
    const res = NextResponse.next();
    console.log("requestcount", reqCount)
    return res;
}   

//restricts middle logic to run for below path.
export const config = {
    matcher: '/api/:path*'
}