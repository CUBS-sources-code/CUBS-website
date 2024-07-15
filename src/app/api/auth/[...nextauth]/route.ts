import userLogIn from "@/libs/userLogin";
import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials) return null;

                const user = await userLogIn(credentials.email, credentials.password);

                if (user) {
                    // Ensure that the user object includes the email and user ID
                    return { ...user, email: credentials.email, id: user.id };
                } else {
                    return null;
                }
            }
        })
    ],

    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    }
};

const handler = NextAuth(authOptions);

export {
    handler as GET,
    handler as POST
};
