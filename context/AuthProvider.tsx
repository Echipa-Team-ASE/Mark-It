'use client'
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthContext>{children}</AuthContext>
    </SessionProvider>
  );
}
