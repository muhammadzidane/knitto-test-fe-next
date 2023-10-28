// Next Auth
import NextAuth from "next-auth";

// Options
import { options } from "./options";

const handler = NextAuth(options);

export { handler as GET, handler as POST };
