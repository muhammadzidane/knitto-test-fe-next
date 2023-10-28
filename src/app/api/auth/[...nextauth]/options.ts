// Next Auth
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        user: {
          label: "User",
          type: "text",
          placeholder: "Enter your user",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        alert("masukk");
        // const baseUrl = process.env.NEXTAUTH_URL;
        // const res = await fetch(`${baseUrl}/auth/login`, {
        //   method: "post",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     user: credentials?.user,
        //     password: credentials?.password,
        //   }),
        // });
        // const user = await res.json();
        // if (user) return user;
        // return null;

        const { user, password } = credentials as {
          user: string;
          password: string;
        };

        if (user !== "john@gmail.com" && password !== "1234") {
          return null;
        }
        return { id: "1234", name: "John Doe", email: "john@gmail.com" };
      },
    }),
  ],
  // pages: {
  //   signIn: "/auth/login",
  // },
};
