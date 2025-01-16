import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTH_CONFIG= {
    providers: [
        //you can add multiple providers here.
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: "Email", type: 'text', placeholder: 'Email' },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials: any) {
                console.log(credentials)
                //do validation here.
                return {
                    id: "user1",
                    name: "tharun",
                    email: "tharun@gmail.com"
                }
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callback functions to handle jwt,session
    callbacks: {
        jwt: ({ token, user }: any) => {
            console.log(token);
            return token
        },
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    //add custom signin page instead default signin page of next auth
    // pages: {
    //     signIn: "/signin"
    // }
}