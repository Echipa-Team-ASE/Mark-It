import bcrypt from "bcrypt";
import type { CredentialInput, CredentialsConfig } from "next-auth/providers";
import { getUserByEmail } from "@/lib/user";

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export const authorizeUser: CredentialsConfig["authorize"] = async (
  credentials
) => {
  if (!credentials.email || !credentials.password) {
    return null;
  }

  const user = await getUserByEmail(credentials.email as string);


  if (!user || user.password === null) {
    return null;
  }

  const isValidPassword = await verifyPassword(
    credentials.password as string,
    user.password
  );

  if (!isValidPassword) {
    return null;
  }

  console.log("user", user);

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    // role: user.role as "admin" | "user" | "manager",
  };
};
