'use client'
import { signIn } from 'next-auth/react'
export default function SignIn() {
    return <div>
        <input type ="text" placeholder="username"></input>
        <input type ="text" placeholder="password"></input>
    <button onClick={async() => {
        const res = await signIn('credentials', {
            username: "",
            password: "",
            redirect: false,
        })
        console.log(res);
    }}>Signin with email</button>
    </div>
}