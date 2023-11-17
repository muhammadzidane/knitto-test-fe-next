// Next Auth
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const baseUrl = process.env.NEXT_PUBLIC_MOCK_APIARY_API;
        const response = await fetch(`${baseUrl}/auth/login`, {
          body: JSON.stringify({
            password: credentials?.password,
            user: credentials?.user,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
        });
        const dataResponse = await response.json();

        if (response.ok && dataResponse) {
          return {
            ...dataResponse.data.userData,
            accessToken: dataResponse.data.accessToken,
          };
        }
        throw new Error(dataResponse.message);
      },
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
        user: {
          label: "User",
          type: "text",
        },
      },
      name: "Credentials",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
