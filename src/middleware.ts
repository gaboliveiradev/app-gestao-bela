import { NextRequest, NextResponse } from 'next/server';
import { getUrl } from '@/lib/getUrl';

export default function Middleware(request: NextRequest) {
    const token = request.cookies.get('authjs.session-token');
    const pathname = request.nextUrl.pathname;

    console.log({
        token: token?.value,
        pathname
    });

    if(pathname === '/auth' && token) {
        return NextResponse.redirect(new URL(getUrl('/dashboard')));
    }

    if(pathname.includes('/dashboard') && !token) {
        return NextResponse.redirect(new URL(getUrl('/auth')));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|facicon.ico).*)'],
}