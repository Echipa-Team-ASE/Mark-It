import { auth } from "@/configs/auth.config";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
    // const session = await auth();
    // const user = session?.user;

    // if(user) {
    //     redirect("/");
    // }

    return (
        <main className="">
            <LoginForm />
        </main>
    );
}