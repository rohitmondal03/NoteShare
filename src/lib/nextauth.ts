import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: ""
    }),
    DiscordProvider({
      clientId: "",
      clientSecret: ""
    })
  ]
}