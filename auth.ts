
import NextAuth from "./node_modules/next-auth/index"
import Google from "./node_modules/next-auth/providers/google"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
})