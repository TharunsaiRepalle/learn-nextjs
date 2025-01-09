import { NextRequest, NextResponse } from "next/server";
import client from '@/db';

//const client = new PrismaClient();

export async function GET() {
    const user = await client.user.findFirst();

    return NextResponse.json(user);
}

export async function POST (req: NextRequest) {
    //extract the body
    const body = await req.json();
    try {
        const user  = await client.user.create({
            data: {
                username : body.username,
                password : body.password
            }
        })
    
        return NextResponse.json({
            message:"You are logged in.",
            user
        })
    } catch(err) {
        return NextResponse.json({
            message: 'somethign wrong!!',
            err
        })
    }
   
   
}