import { auth } from "@/configs/auth.config";
import { createUser, getAllUsers } from "@/lib/user";
import { insertUserSchema } from "@/validation/user";


export async function GET(request: Request) {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (user.role !== "admin") {
    return new Response("Forbidden", { status: 403 });
  }

  const users = await getAllUsers();

  if (!users) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(JSON.stringify(users), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (user.role !== "admin") {
    return new Response("Forbidden", { status: 403 });
  }

  const body = await request.json();
  const validatedBody = insertUserSchema.safeParse(body);
  if (validatedBody.success === false) {
    return new Response(JSON.stringify(validatedBody.error), {
      status: 400,
    });
  }

  const newUser = await createUser(validatedBody.data);
  return Response.json({ user: newUser });
}
