import { auth } from '@/configs/auth.config';
import { updateTaskStatus } from '@/lib/task';
import { updateTaskStatusSchema } from '@/validation/task';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await request.json();
  const validatedBody = updateTaskStatusSchema.safeParse(body);

  if (validatedBody.success === false) {
    return new Response(JSON.stringify(validatedBody.error), { status: 400 });
  }

  const { id } = params;
  const { status } = validatedBody.data;
  try {
    const updatedTask = await updateTaskStatus(id, status);
    return new Response(JSON.stringify(updatedTask), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
}