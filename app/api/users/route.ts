import { auth } from "@/configs/auth.config";
import { insertUserSchema } from "@/validation/user";

export async function GET() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (user.role === "user") {
    return new Response("Forbidden", { status: 403 });
  }

    return new Response(JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
    });
}
