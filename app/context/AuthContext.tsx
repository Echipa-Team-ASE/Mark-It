"use client";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";

type AuthContextType = {
  //   query: (path: string, init?: RequestInit) => Promise<Response>;
  status: "unauthenticated" | "authenticated" | "loading";
  session: Session | null;
};

const Context = createContext<AuthContextType | undefined>(undefined);

export function AuthContext({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    const expiryDate = new Date(Number(session?.expires) * 1000);
    const currentDate = new Date();
    if (expiryDate < currentDate) {
      signOut();
    }
  }

  if (status === "unauthenticated") router.push("/login");

  return (
    <Context.Provider value={{ status, session }}>{children}</Context.Provider>
  );
}