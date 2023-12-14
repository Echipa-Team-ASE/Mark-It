import { auth } from '@/configs/auth.config'

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  console.log(session?.expires);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Next.js + Tailwind CSS</h1>
    </main>
  );
}
