// Next Auth
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: {
          label: "User",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const baseUrl = process.env.NEXT_PUBLIC_MOCK_APIARY_API;
        const res = await fetch(`${baseUrl}/auth/login`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: credentials?.user,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        console.log(user);

        if (res.ok && user) {
          return { ...user.data.userData, accessToken: user.data.accessToken };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};