import { NextResponse } from 'next/server'

export function middleware(request) {
    if(!request.cookies.has(process.env.JWT_COOKIE_KEY))
         return NextResponse.redirect(new URL('/', request.url))
}


export const config = {
  matcher: [
    '/films/:path*',
    '/dashboard/:path*',
  ]
}