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


export async function getAllUsers() {
  const queryResult = await db
    .select()
    .from(user);

  return queryResult;
}

export async function getAllManagers() {
  const queryResult = await db
    .select()
    .from(user)
    .where(eq(user.role, "manager"))

  return queryResult;
}

export async function getAllUsersByManagerId(managerId: string) {
  const queryResult = await db
    .select()
    .from(user)
    .where(eq(user.managerId, managerId));

  const [asd] = queryResult;
  return asd;
}


export async function createUser(userData: CreateCredentialsUserDto) {
  userData.password = await bcrypt.hash(userData.password, 10);
  userData.createdAt = new Date().toISOString();

  const newUser = await db
    .insert(user)
    .values({ id: crypto.randomUUID(), ...userData })
    .returning({ id: user.id });

  return newUser;
}

export async function updateUser(id: string, userData: {
  email?: string;
  password?: string;
  name?: string;
  role?: "admin" | "user" | "manager";
  createdAt?: string;
  managerId?: string;
}) {
  const updatedUser = await db
    .update(user)
    .set({ ...userData })
    .where(eq(user.id, id))
    .returning({ id: user.id });

  return updatedUser;
}
