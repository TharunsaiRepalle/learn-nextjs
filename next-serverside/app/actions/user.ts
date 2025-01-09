"use server"

import client from '@/db';
export async function singupAction(username: string , password: string) {
    try {
        await client.user.create({
            data: {
                username,
                password
            }
        })

        return true;
    } catch (err) {
        return false;
    }
}

