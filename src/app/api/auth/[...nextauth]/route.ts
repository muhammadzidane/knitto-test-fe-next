// Next Auth
import NextAuth from "next-auth";

// Options
import { options } from "./authOptions";

const handler = NextAuth(options);

export { handler as POST, handler as GET };
