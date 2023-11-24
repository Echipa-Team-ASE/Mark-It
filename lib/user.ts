import db from "@/db/index";
import {
  user,
  type User,
  CreateCredentialsUserDto,
} from "@/db/schema/user";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import crypto from "crypto";

export async function getUserByEmail(email: string): Promise<User | null> {
  const queryResult = await db
    .select()
    .from(user)
    .where(eq(user.email, email));

  if (queryResult.length === 0) {
    return null;
  }

  const [asd] = queryResult;
  return asd;
}


export async function createUser(userData: CreateCredentialsUserDto) {
  userData.password = await bcrypt.hash(userData.password, 10);

  const newUser = await db
    .insert(user)
    .values({ id: crypto.randomUUID(), ...userData })
    .returning({ id: user.id });

  return newUser;
}
