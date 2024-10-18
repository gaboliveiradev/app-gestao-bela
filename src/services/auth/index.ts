import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { Prisma } from '../database';

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    adapter: PrismaAdapter(Prisma),
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),
    ],
    secret: process.env.SECRET,
    pages: {
        signIn: '/auth',  /** Quando for realizar Login */
        signOut: '/auth', /** Quando o usuário fizer Logout */
        error: '/auth',    /** Se der erro para onde será redirecionado */
        verifyRequest: '/auth',  /** Quando ele envia pro MagicLink para onde irá nos redirecionar */
        newUser: '/dashboard' /** Quando um novo usuário for criado para onde irá redirecioanr */
    }
})