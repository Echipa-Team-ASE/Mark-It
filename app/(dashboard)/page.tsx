import { auth } from "@/configs/auth.config";
import { getAllTasks, getTasksByUserId } from "@/lib/task";
import { getAllManagers, getAllUsers } from "@/lib/user";
import TaskTable from "./TaskTable";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  const users = await getAllUsers();
  const managers  = await getAllManagers();
  console.log(user);
  const tasks = user?.role === 'user' ? await getTasksByUserId(user?.id as string) : await getAllTasks();

  console.log(tasks);

  return (
    <main className="flex min-h-screen flex-col max-w-7xl pt-16 mx-auto p-4">
      <h1 className="text-4xl font-bold mb-12">Welcome to Markit, {user?.name}</h1>
      <TaskTable tasks={tasks.map((task) => {
        return {
          id: task.id as string,
          title: task.title as string,
          description: task.description as string,
          status: task.status as 'open' | 'pending' | 'completed' | 'closed',
          user: users.find((user) => user.id === task.userId)?.name as string,
          manager: managers.find((manager) => manager.id === task.managerId)?.name as string,
        };
      })} />
    </main>
  );
}