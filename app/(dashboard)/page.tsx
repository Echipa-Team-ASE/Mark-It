import { auth } from "@/configs/auth.config";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col max-w-7xl pt-24 mx-auto">
      <h1 className="text-4xl font-bold">Welcome to Markit, {user?.name}</h1>
    </main>
  );
}
