import { auth } from "@/configs/auth.config";

export async function GET(
    request: Request,
    { params } : { params: { id: string } } 
) {
    const session = await auth();
    const user = session?.user;

    if(!user) {
        return new Response('Unauthorized', { status: 401 });
    }

    if(user.role === 'user') {
        return new Response('Forbidden', { status: 403 });
    }
}