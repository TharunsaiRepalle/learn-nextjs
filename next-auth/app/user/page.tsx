import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "../../lib/auth";


export default async function User() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return <div>
        <Appbar />
        {JSON.stringify(session)}    
        User Component
    </div>
}