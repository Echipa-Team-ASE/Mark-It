import { auth } from "@/configs/auth.config";
import { getAllManagers } from "@/lib/user";

export async function GET(request: Request) {
    const session = await auth();
    const user = session?.user;

    if(!user) {
        return new Response('Unauthorized', { status: 401 });
    }

    if(user.role !== 'admin') {
        return new Response('Forbidden', { status: 403 });
    }

    const managers = await getAllManagers();

    return new Response(JSON.stringify(managers), {
        headers: {
            'content-type': 'application/json',
        },
    });
}